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
  countrie: TCountries[0]
  score: TScores[0]
}

export interface IUserCard
  extends Partial<ITitleUser>,
    Partial<IUser>,
    Partial<ITrashInfo> {}

export type TCountries = string[]
export type TScores = string[]

export interface IUserCardActiveFilter {
  scores: TScores[0]
  countries: TCountries[0]
}
