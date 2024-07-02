import type { IUserCard } from '@/stores/userCard/user-card.types'

export interface IDefaultPropForSlot {
  userCards: IUserCard[]
}

export interface IActionPropForSlot extends IDefaultPropForSlot {}

export interface IUserCardControllerSlots {
  'card'(props: IDefaultPropForSlot): void
  'actions'(props: IActionPropForSlot): void
  'img'(props: void): void
}
