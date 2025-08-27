import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/forum', label: 'Forum' },
  { to: '/gauntlet', label: 'Gauntlet' },
  { to: '/arena', label: 'WorldSpeak' },
  { to: '/oracle', label: 'Oracle' },
  { to: '/vault', label: 'Vault' },
]

export default function BranchHeader() {
  return (
    <header className="border-b border-slate-800/70 bg-slate-950/60 backdrop-blur">
      <div className="container-page py-3 flex items-center justify-between">
        <div className="font-semibold tracking-tight">
          <span className="text-slate-200">The Forum</span>{' '}
          <span className="text-emerald-400">2025</span>
        </div>

        <nav className="hidden md:flex gap-2">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                [
                  'px-3 py-1 rounded-lg text-sm border',
                  isActive
                    ? 'bg-slate-800 border-slate-600 text-slate-100'
                    : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800/70',
                ].join(' ')
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        {/* simple mobile toggle (can swap for a drawer later) */}
        <details className="md:hidden">
          <summary className="px-3 py-1 rounded-lg border bg-slate-900/50 border-slate-800 cursor-pointer">
            Menu
          </summary>
          <div className="mt-2 flex flex-col gap-2">
            {tabs.map((t) => (
              <NavLink
                key={t.to}
                to={t.to}
                className={({ isActive }) =>
                  [
                    'px-3 py-2 rounded-lg text-sm border',
                    isActive
                      ? 'bg-slate-800 border-slate-600 text-slate-100'
                      : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800/70',
                  ].join(' ')
                }
              >
                {t.label}
              </NavLink>
            ))}
          </div>
        </details>
      </div>
    </header>
  )
}
