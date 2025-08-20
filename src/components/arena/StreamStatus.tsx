import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { connect, connected, disconnect, setBitrate, setLatency } from '@/store/arenaSlice'
export default function StreamStatus() {
  const dispatch = useAppDispatch()
  const { connection, bitrateKbps, latencyMs } = useAppSelector(s => s.arena)
  useEffect(() => { let t: number|undefined; if (connection==='connecting'){ t = window.setTimeout(()=>dispatch(connected()),800)}; return ()=>{ if(t) window.clearTimeout(t) } }, [connection, dispatch])
  useEffect(() => { if(connection!=='connected') return; const id = window.setInterval(()=>{ const kbps=800+Math.floor(Math.random()*600); const lat=20+Math.floor(Math.random()*40); dispatch(setBitrate(kbps)); dispatch(setLatency(lat)) },1000); return ()=>window.clearInterval(id)}, [connection, dispatch])
  const badge = { disconnected:'bg-red-900/50 text-red-300', connecting:'bg-yellow-900/40 text-yellow-200', connected:'bg-emerald-900/40 text-emerald-200' }[connection]
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-3">
      <div className="flex items-center justify-between"><h3 className="text-lg font-semibold">Stream Status</h3><span className={`px-2 py-1 text-xs rounded ${badge}`}>{connection}</span></div>
      <div className="text-slate-300">Bitrate: <span className="text-slate-100">{bitrateKbps} kbps</span></div>
      <div className="text-slate-300">Latency: <span className="text-slate-100">{latencyMs} ms</span></div>
      <div className="flex gap-2 pt-2">
        <button onClick={()=>dispatch(connect())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Connect</button>
        <button onClick={()=>dispatch(disconnect())} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Disconnect</button>
      </div>
    </div>
  )
}