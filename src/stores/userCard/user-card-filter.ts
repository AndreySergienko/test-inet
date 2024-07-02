import { shallowReactive, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type {
  TScores,
  TCountries,
  IUserCardActiveFilter,
} from './user-card.types'

/** Стор для работы с фильтрами карточек пользователей */
export const useUserCardFilterStore = defineStore('userCardFilter', () => {
  const countries = shallowRef<TCountries>([])
  const scores = shallowRef<TScores>([])

  const activeFilter = shallowReactive<IUserCardActiveFilter>({
    countries: '',
    scores: '',
  })

  const updateCountries = (countrie: TCountries[0]) => {
    activeFilter.countries = countrie
  }

  const updateScores = (score: TScores[0]) => (activeFilter.scores = score)

  /** Получить данные для фильтров асинхронно */
  const fetchScores = () => {
    try {
      scores.value = ['> 20', '< 10']
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    }
  }

  const fetchCountries = () => {
    try {
      countries.value = ['russia', 'usa']
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    }
  }
  return {
    activeFilter,
    countries,
    scores,
    fetchCountries,
    fetchScores,
    updateScores,
    updateCountries,
  }
})
