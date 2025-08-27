import { ReactNode } from 'react'
import BranchHeader from '@/ui/BranchHeader'
import { Outlet } from 'react-router-dom'

type Props = { children?: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-dvh">
      <BranchHeader />
      <main className="container-page py-6">
        {children ?? <Outlet />}
      </main>
    </div>
  )
}
