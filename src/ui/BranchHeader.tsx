import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const linkBase = "px-3 py-2 rounded-xl hover:bg-slate-800/60 transition"
const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${linkBase} bg-slate-800` : `${linkBase} bg-slate-900/40`

export default function BranchHeader() {
  const [open, setOpen] = useState(false)
  const links = (
    <nav className="flex flex-col md:flex-row gap-2 text-sm">
      <NavLink to="/" className={navClass}>Home</NavLink>
      <NavLink to="/forum" className={navClass}>Forum</NavLink>
      <NavLink to="/gauntlet" className={navClass}>Gauntlet</NavLink>
      <NavLink to="/arena" className={navClass}>WorldSpeak</NavLink>
      <NavLink to="/oracle" className={navClass}>Oracle</NavLink>
      <NavLink to="/vault" className={navClass}>Vault</NavLink>
    </nav>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="max-w-6xl mx-auto p-3 flex items-center gap-3">
        <button className="md:hidden px-2 py-1 rounded-lg bg-slate-800" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">☰</button>
        <div className="text-lg font-semibold tracking-wide">
          The Forum <span className="text-emerald-400">2025</span>
        </div>
        <div className="ml-auto hidden md:block">{links}</div>
      </div>
      {open && <div className="md:hidden border-t border-slate-800/60 px-3 pb-3">{links}</div>}
    </header>
  )
}
