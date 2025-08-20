import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import BranchHeader from '@/ui/BranchHeader'
import Spinner from '@/ui/Spinner'

export default function Layout() {
  return (
    <div className="cinematic">
      <BranchHeader />
      <main className="max-w-6xl mx-auto p-6">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}