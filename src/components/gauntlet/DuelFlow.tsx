import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { start, pause, finish, nextRound, reset } from '@/store/duelSlice'
export default function DuelFlow() {
  const dispatch = useAppDispatch()
  const duel = useAppSelector(s => s.duel)
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Duel Flow</h3>
        <span className="text-xs text-slate-400">Round {duel.round} · {duel.status}</span>
      </div>
      <p className="text-slate-300">Topic: <span className="text-slate-100">{duel.topic}</span></p>
      <div className="flex flex-wrap gap-2 pt-2">
        <button onClick={() => dispatch(start())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Start</button>
        <button onClick={() => dispatch(pause())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Pause</button>
        <button onClick={() => dispatch(nextRound())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Next Round</button>
        <button onClick={() => dispatch(finish())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Finish</button>
        <button onClick={() => dispatch(reset())} className="rounded-xl bg-slate-900 px-3 py-1 hover:bg-slate-800">Reset</button>
      </div>
    </div>
  )
}