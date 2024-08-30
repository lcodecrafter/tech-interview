import { AsyncState } from '@src/app/store/types'
import { Oompa } from '@src/types/oompa'

export interface OompaDetailsState {
  oompaDetails: AsyncState<Oompa>
}
