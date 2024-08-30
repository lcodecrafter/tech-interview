import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Oompas } from '@src/types/oompas'
import { fetchOompaDetails, fetchOompaLoompas } from './oompasThunk'
import { Oompa } from '@src/types/oompa'
import { OompaState } from './types'

const initialState: OompaState = {
  oompas: {
    value: [],
    status: 'idle',
    error: null,
    lastFetched: null,
  },
  filteredOompas: [],
  oompaDetails: {
    value: {} as Oompa,
    status: 'idle',
    error: null,
    lastFetched: null,
  },
}

const oompasSlice = createSlice({
  name: 'oompaLoompas',
  initialState,
  reducers: {
    setFilteredOompas(state, action: PayloadAction<Oompas>) {
      state.filteredOompas = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOompaLoompas.pending, (state) => {
        state.oompas.status = 'loading'
      })
      .addCase(
        fetchOompaLoompas.fulfilled,
        (state, action: PayloadAction<Oompas>) => {
          state.oompas.value = action.payload
          state.oompas.status = 'succeeded'
          state.oompas.lastFetched = Date.now()
        },
      )
      .addCase(fetchOompaLoompas.rejected, (state, action) => {
        state.oompas.status = 'failed'
        state.oompas.error = action.error.message
      })
      .addCase(fetchOompaDetails.pending, (state) => {
        state.oompaDetails.status = 'loading'
      })
      .addCase(
        fetchOompaDetails.fulfilled,
        (state, action: PayloadAction<Oompa>) => {
          state.oompaDetails.value = action.payload
          state.oompaDetails.status = 'succeeded'
          state.oompaDetails.lastFetched = Date.now()
        },
      )
      .addCase(fetchOompaDetails.rejected, (state, action) => {
        state.oompaDetails.status = 'failed'
        state.oompaDetails.error = action.error.message
      })
  },
})

export const { setFilteredOompas } = oompasSlice.actions
export default oompasSlice.reducer
