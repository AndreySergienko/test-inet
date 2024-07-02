import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUserCard } from './user-card.types'

export const useUserCardStore = defineStore('userCard', () => {
  const userCard = ref<IUserCard[]>([])

  /** Получить карточки асинхронно */
  const fetchCard = () => {}
  return {
    userCard,
    fetchCard,
  }
})
