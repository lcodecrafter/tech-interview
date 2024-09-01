import { AsyncState } from '@src/app/store/types'
import { Oompas } from '@src/types/oompas'

export interface OompasState extends AsyncState<Oompas> {
  currentPage: number
}

export interface OompaListState {
  oompas: OompasState
  filteredOompas: Oompas
}
