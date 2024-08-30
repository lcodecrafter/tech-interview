import { configureStore } from '@reduxjs/toolkit'
import oompaList from './features/home/oompasSlice'
import oompaDetails from './features/details/oompasSlice'

export const store = configureStore({
  reducer: {
    home: oompaList,
    details: oompaDetails,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
