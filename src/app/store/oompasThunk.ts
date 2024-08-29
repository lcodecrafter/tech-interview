import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOompas } from '@src/api/oompaLoompaApi'
import { Oompas } from '@src/types/oompas'

export const fetchOompaLoompas = createAsyncThunk<Oompas, number | undefined>(
  'oompaLoompas/getOompas',
  async (page: number = 1) => {
    return await getOompas(page)
  },
)
