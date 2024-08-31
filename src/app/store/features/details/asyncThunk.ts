import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOompaDetails } from '@src/api/oompaLoompaApi'
import { Oompa } from '@src/types/oompa'
import { RootState } from '@src/app/store'
import { OompaDiccionary } from './types'

export const fetchOompaDetails = createAsyncThunk<
  OompaDiccionary,
  string,
  { state: RootState }
>('oompaLoompas/getOompaDetails', async (id: string, { getState }) => {
  const storagedOompas = getState().details.oompaDetails.value
  const oompa = storagedOompas[id]
  // // Fetch only once a day
  if (oompa && Date.now() - oompa.lastFetched < 86400000) return { [id]: oompa }
  const data: Oompa = await getOompaDetails(id)
  return { [id]: { ...data, lastFetched: Date.now() } }
})
