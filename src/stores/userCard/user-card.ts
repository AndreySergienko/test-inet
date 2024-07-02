import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  IUserCard,
  IUserCardActiveFilter,
  TFilerValidators,
} from './user-card.types'
import { data } from './user-card.data'

/** Стор для работы с карточками пользователей */
export const useUserCardStore = defineStore('userCard', () => {
  let userCards: IUserCard[] = []
  const mutalableUserCards = ref<IUserCard[]>([])

  const filteredUserCards = (
    filter: IUserCardActiveFilter,
    validators: TFilerValidators,
  ) => {
    const keysHasValue = Object.keys(filter).filter(
      (key: string) => filter[key],
    )
    mutalableUserCards.value = userCards.filter((el: IUserCard) => {
      for (let i = 0; i < keysHasValue.length; i++) {
        const keyValidator = keysHasValue[i] as keyof TFilerValidators
        const keyEl = keyValidator as keyof IUserCard
        if (!keyEl) return false
        /** Крайне важно подобный код покрывать проверками */
        if (!el[keyEl]) return false
        if (!validators[keyValidator]) return false
        if (validators[keyValidator](el[keyEl] as string)) continue
        else return false
      }
      return true
    })
  }

  /** Получить карточки асинхронно */
  const fetchCard = () => {
    try {
      userCards = data
      mutalableUserCards.value = data
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    }
  }
  return {
    filteredUserCards,
    mutalableUserCards,
    userCards,
    fetchCard,
  }
})
