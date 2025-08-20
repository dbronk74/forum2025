import { NavLink } from 'react-router-dom'
const linkBase = "px-4 py-2 rounded-xl hover:bg-slate-800/60 transition"
const active = ({ isActive }: { isActive: boolean }) => isActive ? `${linkBase} bg-slate-800` : `${linkBase} bg-slate-900/40`
export default function BranchHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center gap-2 p-3">
        <div className="text-lg font-semibold tracking-wide">
          The Forum <span className="text-portal">2025</span>
        </div>
        <nav className="ml-auto flex gap-2 text-sm">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/forum" className={active}>Forum</NavLink>
          <NavLink to="/gauntlet" className={active}>Gauntlet</NavLink>
          <NavLink to="/arena" className={active}>WorldSpeak Arena</NavLink>
          <NavLink to="/oracle" className={active}>Oracle</NavLink>
          <NavLink to="/vault" className={active}>Vault</NavLink>
        </nav>
      </div>
    </header>
  )
}