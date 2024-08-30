import { Oompa } from '@src/types/oompa'
import { Oompas } from '@src/types/oompas'

interface AsyncState<T> {
  value: T
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string | null
  lastFetched: null | number
}

export interface OompaState {
  oompas: AsyncState<Oompas>
  filteredOompas: Oompas
  oompaDetails: AsyncState<Oompa>
}
