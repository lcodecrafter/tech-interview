import { setFilteredOompas } from '@src/app/store/oompasSlice'
import { Oompas } from '@src/types/oompas'
import { useDispatch } from 'react-redux'

export function useSearchBar() {
  const dispatch = useDispatch()
  const filterResults = (searchResults: Oompas, searchValue: string) => {
    const searchString = searchValue.toLowerCase()

    const filteredResults = searchResults.filter(
      ({ first_name, last_name, profession }) =>
        first_name.toLowerCase().includes(searchString) ||
        last_name.toLowerCase().includes(searchString) ||
        profession.toLowerCase().includes(searchString),
    )

    dispatch(setFilteredOompas(filteredResults))
  }

  return { filterResults }
}
