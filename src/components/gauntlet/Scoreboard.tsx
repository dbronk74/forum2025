type Props = {
  roundsWonA?: number
  roundsWonB?: number
  prestigeA?: number
  prestigeB?: number
}

export default function Scoreboard({
  roundsWonA = 0,
  roundsWonB = 0,
  prestigeA = 0,
  prestigeB = 0,
}: Props) {
  return (
    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
      <h3 className="font-semibold mb-3">Scoreboard</h3>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="rounded-xl p-3 bg-slate-800/60">
          <div className="text-xs uppercase tracking-wide text-slate-400">Side A</div>
          <div className="text-2xl font-bold">{roundsWonA}</div>
          <div className="text-xs text-amber-400">Prestige {prestigeA}</div>
        </div>
        <div className="rounded-xl p-3 bg-slate-800/60">
          <div className="text-xs uppercase tracking-wide text-slate-400">Side B</div>
          <div className="text-2xl font-bold">{roundsWonB}</div>
          <div className="text-xs text-amber-400">Prestige {prestigeB}</div>
        </div>
      </div>
    </div>
  )
}
