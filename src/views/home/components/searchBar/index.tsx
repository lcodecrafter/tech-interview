import React from 'react'
import loupeIcon from '@src/assets/ic_search.png'
import { useSearchBar } from './useSearchBar'

export function SearchBar() {
  const { filterResults } = useSearchBar()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterResults(event.target.value)
  }

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="h-9 w-52 mt-7 flex justify-center p-2 border rounded-lg border-gray-400">
        <input
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
          className="w-full placeholder-black outline-none"
        />
        <div className="w-[1px] h-full mx-2 bg-gray-400"></div>
        <img src={loupeIcon} alt="search icon" />
      </div>
    </div>
  )
}
