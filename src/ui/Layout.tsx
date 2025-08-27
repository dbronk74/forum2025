import { ReactNode } from 'react'
import BranchHeader from '@/ui/BranchHeader'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from '@/ui/ErrorBoundary'

type Props = { children?: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-dvh">
      <BranchHeader />
      <ErrorBoundary>
        <main className="container-page py-6">
          {children ?? <Outlet />}
        </main>
      </ErrorBoundary>
    </div>
  )
}
