import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOompaDetails } from '@src/api/oompaLoompaApi'
import { Oompa } from '@src/types/oompa'
import { RootState } from '@src/app/store'

export const fetchOompaDetails = createAsyncThunk<
  Oompa,
  string,
  { state: RootState }
>('oompaLoompas/getOompaDetails', async (id: string, { getState }) => {
  const { lastFetched, value } = getState().details.oompaDetails
  // Fetch only once a day
  if (lastFetched && Date.now() - lastFetched < 86400000) return value
  return await getOompaDetails(id)
})
