import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOompas } from '@src/api/oompaLoompaApi'
import { OompasWithPage } from '@src/types/oompas'
import { RootState } from '@src/app/store'

export const fetchOompaLoompas = createAsyncThunk<
  OompasWithPage,
  number | undefined,
  { state: RootState }
>('oompaLoompas/getOompas', async (page: number = 1, { getState }) => {
  const { lastFetched, value, currentPage } = getState().home.oompas

  // Fetch only once a day
  if (lastFetched && Date.now() - lastFetched < 86400000 && page <= currentPage)
    return { oompas: value, page }

  const data = await getOompas(page)

  return { oompas: data, page }
})
