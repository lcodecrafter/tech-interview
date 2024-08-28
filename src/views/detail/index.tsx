import { useParams } from 'react-router-dom'

export default function Details() {
  const { id } = useParams()
  return (
    <div>
      <h1>{id} - Detail</h1>
      <p>Welcome to the Details page</p>
    </div>
  )
}
