import { shallowReactive, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type {
  TScores,
  TCountries,
  IUserCardActiveFilter,
  TFilerValidators,
} from './user-card.types'
import { scoreTable, transformData } from './user-card.helper'
import { countriesData, scoresData } from './user-card.data'

/** Стор для работы с фильтрами карточек пользователей */
export const useUserCardFilterStore = defineStore('userCardFilter', () => {
  const countries = shallowRef<TCountries>([])
  const scores = shallowRef<TScores>([])

  const activeFilter = shallowReactive<IUserCardActiveFilter>({
    countrie: '',
    score: '',
  })

  /** Я не хочу использовать eval для запуска вычислений > | <
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

  /** Запрос для фильтра - счёт/рейтинг */
  const fetchScores = () => {
    try {
      scores.value = transformData(scoresData)
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    }
  }

  /** Запрос для фильтра - страны */
  const fetchCountries = () => {
    try {
      countries.value = transformData(countriesData)
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
