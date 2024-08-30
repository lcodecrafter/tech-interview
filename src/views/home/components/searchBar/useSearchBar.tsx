import { RootState } from '@src/app/store'
import { setFilteredOompas } from '@src/app/store/features/home/oompasSlice'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useSearchBar() {
  const dispatch = useDispatch()
  const oompas = useSelector((state: RootState) => state.home.oompas.value)

  const filterResults = useCallback(
    (searchValue: string) => {
      const searchString = searchValue.toLowerCase()

      const filteredResults = oompas.filter(
        ({ first_name, last_name, profession }) =>
          first_name.toLowerCase().includes(searchString) ||
          last_name.toLowerCase().includes(searchString) ||
          profession.toLowerCase().includes(searchString),
      )

      dispatch(setFilteredOompas(filteredResults))
    },
    [dispatch, oompas],
  )

  return { filterResults }
}
