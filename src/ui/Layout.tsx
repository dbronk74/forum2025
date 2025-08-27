import { ReactNode } from 'react'
import BranchHeader from '@/ui/BranchHeader'
import { Outlet } from 'react-router-dom'

type Props = { children?: ReactNode }

/**
 * Unified app shell:
 * - Global header
 * - Page container with comfortable spacing
 * - Works with either <Outlet/> (router) or children
 */
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
