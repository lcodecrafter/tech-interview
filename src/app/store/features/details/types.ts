import { AsyncState } from '@src/app/store/types'
import { Oompa } from '@src/types/oompa'

export interface OompaDiccionaryItem extends Oompa {
  lastFetched: number
}

export interface OompaDiccionary {
  [key: string]: OompaDiccionaryItem
}

export interface OompaDetailsState {
  oompaDetails: Omit<AsyncState<OompaDiccionary>, 'lastFetched'>
}
