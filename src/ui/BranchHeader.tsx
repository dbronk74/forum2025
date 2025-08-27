import { NavLink, useNavigate } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', end: true },
  { to: '/forum', label: 'Forum' },
  { to: '/gauntlet', label: 'Gauntlet' },
  { to: '/arena', label: 'WorldSpeak' },
  { to: '/oracle', label: 'Oracle' },
  { to: '/vault', label: 'Vault' },
]

export default function BranchHeader() {
  const navigate = useNavigate()

  const base =
    'px-3 py-1 rounded-lg text-sm border transition select-none'

  return (
    <header className="border-b border-slate-800/70 bg-slate-950/60 backdrop-blur">
      <div className="container-page py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="font-semibold tracking-tight text-left"
        >
          <span className="text-slate-200">The Forum</span>{' '}
          <span className="text-emerald-400">2025</span>
        </button>

        <nav className="hidden md:flex gap-2">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.end as boolean | undefined}
              className={({ isActive }) =>
                [
                  base,
                  isActive
                    ? 'bg-slate-800 border-slate-600 text-slate-100 pointer-events-none cursor-default'
                    : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800/70',
                ].join(' ')
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <details className="md:hidden">
          <summary className={`${base} bg-slate-900/50 border-slate-800 cursor-pointer`}>
            Menu
          </summary>
          <div className="mt-2 flex flex-col gap-2">
            {tabs.map((t) => (
              <NavLink
                key={t.to}
                to={t.to}
                end={t.end as boolean | undefined}
                className={({ isActive }) =>
                  [
                    base,
                    isActive
                      ? 'bg-slate-800 border-slate-600 text-slate-100 pointer-events-none cursor-default'
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
