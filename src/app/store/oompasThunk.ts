import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOompaDetails, getOompas } from '@src/api/oompaLoompaApi'
import { Oompa } from '@src/types/oompa'
import { Oompas } from '@src/types/oompas'
import { RootState } from '.'

export const fetchOompaLoompas = createAsyncThunk<
  Oompas,
  number | undefined,
  { state: RootState }
>('oompaLoompas/getOompas', async (page: number = 1, { getState }) => {
  const { lastFetched, value } = getState().oompaLoompas.oompas

  // Fetch only once a day
  if (lastFetched && Date.now() - lastFetched < 86400000) return value

  return await getOompas(page)
})

export const fetchOompaDetails = createAsyncThunk<
  Oompa,
  string,
  { state: RootState }
>('oompaLoompas/getOompaDetails', async (id: string, { getState }) => {
  const { lastFetched, value } = getState().oompaLoompas.oompaDetails
  console.log(value)
  // Fetch only once a day
  if (lastFetched && Date.now() - lastFetched < 86400000) return value
  return await getOompaDetails(id)
})
