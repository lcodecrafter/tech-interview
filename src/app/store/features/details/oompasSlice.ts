import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchOompaDetails } from './asyncThunk'
import { OompaDetailsState, OompaDiccionary } from './types'

const initialState: OompaDetailsState = {
  oompaDetails: {
    value: {},
    status: 'idle',
    error: null,
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
        (state, action: PayloadAction<OompaDiccionary>) => {
          state.oompaDetails.value = {
            ...state.oompaDetails.value,
            ...action.payload,
          }
          state.oompaDetails.status = 'succeeded'
        },
      )
      .addCase(fetchOompaDetails.rejected, (state, action) => {
        state.oompaDetails.status = 'failed'
        state.oompaDetails.error = action.error.message
      })
  },
})

export default oompaDetailsSlice.reducer
