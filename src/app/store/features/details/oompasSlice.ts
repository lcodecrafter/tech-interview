import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchOompaDetails } from './asyncThunk'
import { Oompa } from '@src/types/oompa'
import { OompaDetailsState } from './types'

const initialState: OompaDetailsState = {
  oompaDetails: {
    value: {} as Oompa,
    status: 'idle',
    error: null,
    lastFetched: null,
  },
}

const oompaDetailsSlice = createSlice({
  name: 'oompaDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export default oompaDetailsSlice.reducer
