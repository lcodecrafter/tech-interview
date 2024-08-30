import { AsyncState } from '@src/app/store/types'
import { Oompas } from '@src/types/oompas'

export interface OompaListState {
  oompas: AsyncState<Oompas>
  filteredOompas: Oompas
}
