import React from 'react'
import loupeIcon from '@src/assets/ic_search.png'
import { useSearchBar } from './useSearchBar'
import oompas from '@src/app/store/oompas.json'
import { Oompas } from '@src/types/oompas'

export function SearchBar() {
  const { filterResults } = useSearchBar()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(
      event.target.value,
      filterResults(oompas.results as Oompas, event.target.value),
    )
  }

  return (
    <div className="h-9 w-52 mt-7 flex justify-center ml-auto p-2 border rounded-lg border-gray-400">
      <input
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
        className="w-full placeholder-black outline-none"
      />
      <div className="w-[1px] h-full mx-2 bg-gray-400"></div>
      <img src={loupeIcon} alt="search icon" />
    </div>
  )
}
