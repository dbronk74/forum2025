import { NavLink } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="text-slate-300">The page you’re looking for doesn’t exist.</p>
      <NavLink to="/" className="inline-block rounded-xl bg-slate-800 px-4 py-2 hover:bg-slate-700">Go Home</NavLink>
    </section>
  )
}