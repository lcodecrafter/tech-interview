import { configureStore } from '@reduxjs/toolkit'
import oompaLoompaReducer from './oompasSlice'

export const store = configureStore({
  reducer: {
    oompaLoompas: oompaLoompaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
