import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOompas } from '@src/api/oompaLoompaApi'
import { Oompas } from '@src/types/oompas'
import { RootState } from '@src/app/store'

export const fetchOompaLoompas = createAsyncThunk<
  Oompas,
  number | undefined,
  { state: RootState }
>('oompaLoompas/getOompas', async (page: number = 1, { getState }) => {
  const { lastFetched, value } = getState().home.oompas

  // Fetch only once a day
  if (lastFetched && Date.now() - lastFetched < 86400000) return value

  return await getOompas(page)
})
