import type { IFilterField } from './user-card.types'

export const transformData = (data: string[]): IFilterField[] =>
  data.map((value, idx) => {
    const id = String(idx + 1)
    return { value, id }
  })

export const scoreTable: Record<string, (value: string) => boolean> = {
  '1': (value: string) => +value > 20,
  '2': (value: string) => +value < 20,
}
