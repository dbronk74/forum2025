import { useState } from 'react'
export default function VotePanel() {
  const [a, setA] = useState(0), [b, setB] = useState(0)
  const total = a + b || 1
  const pa = Math.round((a / total) * 100), pb = 100 - pa
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-3">
      <h3 className="text-lg font-semibold">Audience Vote</h3>
      <div className="flex gap-2">
        <button onClick={() => setA(a + 1)} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Pro +1</button>
        <button onClick={() => setB(b + 1)} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Con +1</button>
        <button onClick={() => { setA(0); setB(0) }} className="rounded-xl bg-slate-900 px-3 py-1 hover:bg-slate-800">Reset</button>
      </div>
      <div className="text-slate-300">Pro: {a} · Con: {b}</div>
      <div className="h-2 w-full rounded bg-slate-800 overflow-hidden">
        <div className="h-full bg-portal" style={{ width: `${pa}%` }} />
      </div>
      <div className="text-xs text-slate-400">Pro {pa}% · Con {pb}%</div>
    </div>
  )
}