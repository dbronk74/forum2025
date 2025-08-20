import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { join, leave, react } from '@/store/spectatorSlice'
export default function SpectatorHUD() {
  const dispatch = useAppDispatch()
  const { viewers, reactions } = useAppSelector(s => s.spectator)
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-2">
      <h3 className="text-lg font-semibold">Spectator HUD</h3>
      <p className="text-slate-300">Viewers: <span className="text-slate-100">{viewers}</span></p>
      <p className="text-slate-300">Reactions: <span className="text-slate-100">{reactions}</span></p>
      <div className="flex flex-wrap gap-2 pt-2">
        <button onClick={() => dispatch(join())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Join</button>
        <button onClick={() => dispatch(leave())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Leave</button>
        <button onClick={() => dispatch(react())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">React</button>
      </div>
    </div>
  )
}