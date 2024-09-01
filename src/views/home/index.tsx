import { OompaList } from './components/oompaList'
import { SearchBar } from './components/searchBar'
import { BaseLayout } from '@src/layouts/base'

export default function Home() {
  return (
    <BaseLayout>
      <main className="px-20">
        <SearchBar />
        <div className=" text-center py-16">
          <h2 className="text-3xl md:text-5xl mb-2">Find your Oompa Loompa</h2>
          <p className="text-2xl md:text-4xl text-gray-500">
            There are more than 100k
          </p>
        </div>
        <OompaList />
      </main>
    </BaseLayout>
  )
}
