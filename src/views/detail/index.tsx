import { Header } from '@src/components/header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@src/app/store'
import { useEffect } from 'react'
import { fetchOompaDetails } from '@src/app/store/oompasThunk'
import DOMPurify from 'dompurify'

export default function Details() {
  const { id } = useParams()

  const dispatch = useDispatch<AppDispatch>()
  const oompa = useSelector(
    (state: RootState) => state.oompaLoompas.oompaDetails.value,
  )

  const sanitizedDescription = DOMPurify.sanitize(oompa?.description)

  useEffect(() => {
    if (id) dispatch(fetchOompaDetails(id))
  }, [dispatch])

  return (
    <div>
      <Header />
      <main className="flex flex-col gap-5 mt-14 px-20 md:flex-row">
        <div className="md:min-w-[60%]">
          <img
            src={oompa.image}
            alt={oompa.first_name}
            className="max-h-96 w-full object-cover"
          />
        </div>
        <div className="md:w-[40%]">
          <div>
            <h2 className="font-bold ">{oompa.first_name}</h2>
            <p className="text-gray-400">{oompa.gender}</p>
            <p className="mb-5 text-gray-400">{oompa.profession}</p>
            <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          </div>
        </div>
      </main>
    </div>
  )
}
