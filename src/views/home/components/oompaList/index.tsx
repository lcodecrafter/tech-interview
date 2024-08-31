import { Link } from 'react-router-dom'
import { useOompaList } from './useOompaList'

export function OompaList() {
  const { oompas, genderTranslations } = useOompaList()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
      {oompas.map(
        ({ id, image, first_name, last_name, gender, profession }) => {
          return (
            <div className="flex flex-col items-start leading-4" key={id}>
              <div className="max-h-[13.5rem] overflow-hidden mb-5">
                <img src={image} alt={first_name} />
              </div>

              <Link
                to={`/${id}`}
                className="text-lg font-bold hover:text-cyan-400"
              >
                {`${first_name} ${last_name}`}
              </Link>
              <p className="text-gray-400 font-medium">
                {genderTranslations[gender]}
              </p>
              <p className="text-sm text-gray-400 font-medium">{profession}</p>
            </div>
          )
        },
      )}
    </div>
  )
}
