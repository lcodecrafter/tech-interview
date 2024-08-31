import { AppDispatch } from '@src/app/store'

import { fetchOompaLoompas } from '@src/app/store/features/home/oompasThunk'
import { selectFilteredOompas } from '@src/app/store/features/home/selectors'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useOompaList() {
  const dispatch = useDispatch<AppDispatch>()
  const oompas = useSelector(selectFilteredOompas)

  const genderTranslations = {
    F: 'Woman',
    M: 'Man',
  }

  useEffect(() => {
    dispatch(fetchOompaLoompas())
  }, [dispatch])

  return { oompas, genderTranslations }
}
