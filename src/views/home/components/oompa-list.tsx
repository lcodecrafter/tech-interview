import { AppDispatch } from '@src/app/store'

import { fetchOompaLoompas } from '@src/app/store/oompasThunk'
import { selectFilteredOompas } from '@src/app/store/selectors'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function OompaList() {
  const dispatch = useDispatch<AppDispatch>()
  const oompas = useSelector(selectFilteredOompas)

  useEffect(() => {
    dispatch(fetchOompaLoompas())
  }, [dispatch])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
      {oompas.map((oompa) => {
        return (
          <div className="flex flex-col items-start leading-4" key={oompa.id}>
            <div className="max-h-[13.5rem] overflow-hidden mb-5">
              <img src={oompa.image} alt={oompa.first_name} />
            </div>

            <Link
              to={`/${oompa.id}`}
              className="text-lg font-bold hover:text-cyan-400"
            >
              {oompa.first_name}
            </Link>
            <p className="text-gray-400 font-medium">{oompa.gender}</p>
            <p className="text-sm text-gray-400 font-medium">
              {oompa.profession}
            </p>
          </div>
        )
      })}
    </div>
  )
}
