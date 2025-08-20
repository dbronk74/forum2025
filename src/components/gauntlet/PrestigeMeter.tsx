import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addPrestige, removePrestige, resetPrestige } from '@/store/prestigeSlice'
export default function PrestigeMeter() {
  const dispatch = useAppDispatch()
  const score = useAppSelector(s => s.prestige.score)
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-3">
      <h3 className="text-lg font-semibold">Prestige</h3>
      <div className="text-3xl font-bold text-glyph">{score}</div>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => dispatch(addPrestige())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">+1</button>
        <button onClick={() => dispatch(removePrestige())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">-1</button>
        <button onClick={() => dispatch(resetPrestige())} className="rounded-xl bg-slate-900 px-3 py-1 hover:bg-slate-800">Reset</button>
      </div>
    </div>
  )
}