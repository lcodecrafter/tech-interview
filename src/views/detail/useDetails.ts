import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@src/app/store'
import { useEffect } from 'react'
import { fetchOompaDetails } from '@src/app/store/features/details/asyncThunk'
import DOMPurify from 'dompurify'
import { OompaDiccionaryItem } from '@src/app/store/features/details/types'

export function useDetails() {
  const { id } = useParams()
  let oompa = {} as OompaDiccionaryItem

  const dispatch = useDispatch<AppDispatch>()
  const oompas = useSelector(
    (state: RootState) => state.details.oompaDetails.value,
  )

  if (id && oompas[id]) {
    oompa = { ...oompas[id] }
    oompa.description = DOMPurify.sanitize(oompa?.description)
  }

  useEffect(() => {
    if (id) dispatch(fetchOompaDetails(id))
  }, [dispatch, id])

  return {
    oompa,
  }
}
