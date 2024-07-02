import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUserCard } from './user-card.types'
import { data } from './user-card.data'

/** Стор для работы с карточками пользователей */
export const useUserCardStore = defineStore('userCard', () => {
  const userCard = ref<IUserCard[]>([])

  /** Получить карточки асинхронно */
  const fetchCard = () => {
    try {
      userCard.value = data
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    }
  }
  return {
    userCard,
    fetchCard,
  }
})
