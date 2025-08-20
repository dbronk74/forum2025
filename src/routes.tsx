import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/ui/Layout'

const Home = lazy(() => import('@/pages/Home'))
const Gauntlet = lazy(() => import('@/pages/Gauntlet'))
const WorldSpeakArena = lazy(() => import('@/pages/WorldSpeakArena'))
const Oracle = lazy(() => import('@/pages/Oracle'))
const Vault = lazy(() => import('@/pages/Vault'))
const Forum = lazy(() => import('@/pages/Forum'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'forum', element: <Forum /> },
      { path: 'gauntlet', element: <Gauntlet /> },
      { path: 'arena', element: <WorldSpeakArena /> },
      { path: 'oracle', element: <Oracle /> },
      { path: 'vault', element: <Vault /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])