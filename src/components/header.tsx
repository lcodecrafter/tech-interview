import { Link } from 'react-router-dom'
import Logo from '@src/assets/logo-umpa-loompa.png'

export function Header() {
  return (
    <header className="w-full flex items-center px-20 py-2 gap-7 bg-gray-300">
      <Link to={'/'}>
        <img src={Logo} alt="Oompa's logo" className="h-5" />
      </Link>
      <h1 className="text-sm font-bold text-center">Oompa Loopa's Crew</h1>
    </header>
  )
}
