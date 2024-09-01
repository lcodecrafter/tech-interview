import { Header } from '@src/components/header'
import { ReactNode } from 'react'

export function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
