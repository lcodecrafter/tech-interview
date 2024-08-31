import { configureStore } from '@reduxjs/toolkit'
import oompaList from './features/home/oompasSlice'
import oompaDetails from './features/details/oompasSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'oompaDetails',
  storage,
  whitelist: ['oompaDetails'],
}

const persistedReducer = persistReducer(persistConfig, oompaDetails)

export const store = configureStore({
  reducer: {
    home: oompaList,
    details: persistedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
