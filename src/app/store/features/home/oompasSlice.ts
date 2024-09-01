import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Oompas, OompasWithPage } from '@src/types/oompas'
import { fetchOompaLoompas } from './oompasThunk'
import { OompaListState } from './types'

const initialState: OompaListState = {
  oompas: {
    value: [],
    status: 'idle',
    error: null,
    lastFetched: null,
    currentPage: 0,
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
        console.log('Feching oompas...')
      })
      .addCase(
        fetchOompaLoompas.fulfilled,
        (state, action: PayloadAction<OompasWithPage>) => {
          state.oompas.status = 'succeeded'
          state.oompas.lastFetched = Date.now()
          state.oompas.value =
            action.payload.page > state.oompas.currentPage
              ? [...state.oompas.value, ...action.payload.oompas]
              : state.oompas.value

          state.oompas.currentPage = action.payload.page
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
