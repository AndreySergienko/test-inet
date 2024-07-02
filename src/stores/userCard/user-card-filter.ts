import { shallowReactive, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type {
  TScores,
  TCountries,
  IUserCardActiveFilter,
  TFilerValidators,
} from './user-card.types'
import { scoreTable, transformData } from './user-card.helper'

/** Стор для работы с фильтрами карточек пользователей */
export const useUserCardFilterStore = defineStore('userCardFilter', () => {
  const countries = shallowRef<TCountries>([])
  const scores = shallowRef<TScores>([])

  const activeFilter = shallowReactive<IUserCardActiveFilter>({
    countrie: '',
    score: '',
  })

  /** Я не очень хочу использовать eval для запуска вычислений
   * В идеале, подобные вычисления должны происходить на серверной стороне
   * Но коли решили фронт, то вот на таких костылях
   */
  const filterValidators: TFilerValidators = {
    countrie: (value: string) => activeFilter.countrie === value,
    score: (value: string) => {
      const cb = scoreTable[activeFilter.score]
      return cb(value)
    },
  }

  const updateCountries = (countrie: string) =>
    (activeFilter.countrie = countrie)

  const updateScores = (score: string) => (activeFilter.score = score)

  /** Получить данные для фильтров асинхронно */
  const fetchScores = () => {
    try {
      scores.value = transformData(['> 20', '< 10'])
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    }
  }

  const fetchCountries = () => {
    try {
      countries.value = transformData(['russia', 'usa'])
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
    filterValidators,
  }
})
