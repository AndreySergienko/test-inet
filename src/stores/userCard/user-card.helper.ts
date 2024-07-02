import type { IFilterField } from './user-card.types'

/** Мэппер на минималках
 * Подготавливает данные для работы на фронте
 */
export const transformData = (data: string[]): IFilterField[] =>
  data.map((value, idx) => {
    const id = String(idx + 1)
    return { value, id }
  })

/** Хранилище, ключ параметра фильтрации - функции для фильтрации по счёту/ретйингу */
export const scoreTable: Record<string, (value: string) => boolean> = {
  '1': (value: string) => +value > 20,
  '2': (value: string) => +value < 10,
}
