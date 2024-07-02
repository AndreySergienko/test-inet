import type {
  IUserCard,
  IUserCardActiveFilter,
  TCountries,
  TScores,
} from '@/stores/userCard/user-card.types'

export interface IDefaultPropForSlot {
  userCards: IUserCard[]
}

export interface IActionPropForSlot {
  countries: TCountries
  scores: TScores
  filter: IUserCardActiveFilter
  updateCountries: (key: TCountries[0]) => void
  updateScores: (key: TScores[0]) => void
}

export interface IUserCardControllerSlots {
  'card'(props: IDefaultPropForSlot): void
  'actions'(props: IActionPropForSlot): void
  'img'(props: void): void
}
