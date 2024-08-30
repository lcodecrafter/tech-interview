import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@src/app/store'

const selectOompasState = (state: RootState) => state.home

export const selectFilteredOompas = createSelector(
  [selectOompasState],
  (state) => {
    const { oompas, filteredOompas } = state
    return filteredOompas.length ? filteredOompas : oompas.value
  },
)
