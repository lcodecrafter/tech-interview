interface Favorite {
  color: string
  food: string
  random_string: string
  song: string
}

export type Oompas = {
  first_name: string
  last_name: string
  favorite: Favorite
  gender: 'F' | 'M'
  image: string
  profession: string
  email: string
  age: number
  country: string
  height: number
  id: number
}[]
