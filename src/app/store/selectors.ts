// oompasSelectors.ts
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './index'

const selectOompasState = (state: RootState) => state.oompaLoompas

export const selectFilteredOompas = createSelector(
  [selectOompasState],
  (state) => {
    const { oompas, filteredOompas } = state
    return filteredOompas.length ? filteredOompas : oompas.value
  },
)
