import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Oompas } from '@src/types/oompas'
import { fetchOompaLoompas } from './oompasThunk'
import { OompaListState } from './types'

const initialState: OompaListState = {
  oompas: {
    value: [],
    status: 'idle',
    error: null,
    lastFetched: null,
  },
  filteredOompas: [],
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
  },
})

export const { setFilteredOompas } = oompasSlice.actions
export default oompasSlice.reducer
