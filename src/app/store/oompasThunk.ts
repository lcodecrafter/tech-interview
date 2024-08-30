import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOompaDetails, getOompas } from '@src/api/oompaLoompaApi'
import { Oompa } from '@src/types/oompa'
import { Oompas } from '@src/types/oompas'

export const fetchOompaLoompas = createAsyncThunk<Oompas, number | undefined>(
  'oompaLoompas/getOompas',
  async (page: number = 1) => {
    return await getOompas(page)
  },
)

export const fetchOompaDetails = createAsyncThunk<Oompa, string>(
  'oompaLoompas/getOompaDetails',
  async (id: string) => {
    return await getOompaDetails(id)
  },
)
