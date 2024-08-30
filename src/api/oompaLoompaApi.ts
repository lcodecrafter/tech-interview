import { Oompa } from '@src/types/oompa'
import { Oompas } from '@src/types/oompas'

export const getOompas = async (page: number = 1): Promise<Oompas> => {
  const response = await fetch(
    `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Oompa Loompas')
  }

  const data = await response.json()
  return data.results
}

export const getOompaDetails = async (id: string): Promise<Oompa> => {
  const response = await fetch(
    `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Oompa Loompa details')
  }

  const data = await response.json()
  return data
}
