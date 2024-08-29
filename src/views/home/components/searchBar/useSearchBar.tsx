import { Oompas } from '@src/types/oompas'

export function useSearchBar() {
  const filterResults = (
    searchResults: Oompas,
    searchValue: string,
  ): Oompas => {
    const searchString = searchValue.toLowerCase()

    return searchResults.filter(
      ({ first_name, last_name, profession }) =>
        first_name.toLowerCase().includes(searchString) ||
        last_name.toLowerCase().includes(searchString) ||
        profession.toLowerCase().includes(searchString),
    )
  }

  return { filterResults }
}
