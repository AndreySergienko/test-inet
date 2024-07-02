import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type {
  IUserCard,
  IUserCardActiveFilter,
  TFilerValidators,
} from './user-card.types'
import { data, FILTER_AWAIT_TIME } from './user-card.data'

/** Стор для работы с карточками пользователей */
export const useUserCardStore = defineStore('userCard', () => {
  /** Не публичный массив  */
  let userCards: IUserCard[] = []

  /** Публичный/мутируемый массив */
  const mutalableUserCards = ref<IUserCard[]>([])
  const isLoading = shallowRef<boolean>(false)

  /** Имитируем ожидание при выполнении фильтрации */
  const filteredUserCards = async (
    filter: IUserCardActiveFilter,
    validators: TFilerValidators,
  ) => {
    if (isLoading.value) throw new Error('Filter is loading')
    const keysHasValue = Object.keys(filter).filter(
      (key: string) => filter[key],
    )
    return await new Promise((resolve) => {
      isLoading.value = true
      /** Метод фильтрации элементов массива */
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

      setTimeout(() => resolve(''), FILTER_AWAIT_TIME)
      return
    }).finally(() => (isLoading.value = false))
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
    fetchCard,
    isLoading,
  }
})
