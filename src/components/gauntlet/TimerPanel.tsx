import { useEffect, useRef, useState } from 'react'
export default function TimerPanel() {
  const [seconds, setSeconds] = useState(120)
  const [running, setRunning] = useState(false)
  const ref = useRef<number | null>(null)
  useEffect(() => {
    if (!running) return
    ref.current = window.setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000)
    return () => { if (ref.current) window.clearInterval(ref.current) }
  }, [running])
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-3">
      <h3 className="text-lg font-semibold">Round Timer</h3>
      <div className="text-3xl font-bold text-portal tabular-nums">{mm}:{ss}</div>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setRunning(true)} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Start</button>
        <button onClick={() => setRunning(false)} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Pause</button>
        <button onClick={() => { setSeconds(120); setRunning(false) }} className="rounded-xl bg-slate-900 px-3 py-1 hover:bg-slate-800">Reset</button>
      </div>
    </div>
  )
}