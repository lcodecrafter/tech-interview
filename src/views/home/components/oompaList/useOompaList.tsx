import { AppDispatch, RootState } from '@src/app/store'

import { fetchOompaLoompas } from '@src/app/store/features/home/oompasThunk'
import { selectFilteredOompas } from '@src/app/store/features/home/selectors'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useOompaList() {
  const dispatch = useDispatch<AppDispatch>()
  const oompas = useSelector(selectFilteredOompas)
  const { currentPage, status, error } = useSelector(
    (state: RootState) => state.home.oompas,
  )
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const genderTranslations = {
    F: 'Woman',
    M: 'Man',
  }

  useEffect(() => {
    if (currentPage === 0) dispatch(fetchOompaLoompas())
  }, [dispatch, currentPage])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      // Get the maximum scroll user can do
      const maxScroll = document.body.scrollHeight - window.innerHeight

      // Fetch more oompas when the user is close to the bottom
      if (
        currentScrollPos > prevScrollPos &&
        maxScroll - currentScrollPos < 100 &&
        status !== 'loading' &&
        status !== 'failed'
      ) {
        dispatch(fetchOompaLoompas(currentPage + 1))
        setPrevScrollPos(currentScrollPos)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch, status, error, currentPage, prevScrollPos])

  return { oompas, genderTranslations }
}
