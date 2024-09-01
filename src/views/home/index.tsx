import { OompaList } from './components/oompaList'
import { SearchBar } from './components/searchBar'
import { BaseLayout } from '@src/layouts/base'
import { Title } from './components/Title'

export default function Home() {
  return (
    <BaseLayout>
      <main className="px-20">
        <SearchBar />
        <Title />
        <OompaList />
      </main>
    </BaseLayout>
  )
}
