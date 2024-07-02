export interface ITitleUser {
  header: string
}

export interface ITrashInfo {
  inset: boolean
  divider: boolean
}

export interface IUser {
  title: string
  avatar: string
  subtitle: string
  countrie: string
  score: string
}

export interface IUserCard
  extends Partial<ITitleUser>,
    Partial<IUser>,
    Partial<ITrashInfo> {}

export interface IFilterField {
  value: string
  id: string
}
export type TCountries = IFilterField[]
export type TScores = IFilterField[]

export interface IUserCardActiveFilter {
  score: string
  countrie: string
  [x: string]: string
}

export type TFilerValidators = {
  score: (value: string) => boolean
  countrie: (value: string) => boolean
}
