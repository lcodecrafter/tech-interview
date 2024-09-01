import { useDetails } from './useDetails'
import { BaseLayout } from '@src/layouts/base'

export default function Details() {
  // If the oompa is not found, we can show a 404 page
  const { oompa } = useDetails()

  return (
    <BaseLayout>
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
            <p dangerouslySetInnerHTML={{ __html: oompa.description }} />
          </div>
        </div>
      </main>
    </BaseLayout>
  )
}
