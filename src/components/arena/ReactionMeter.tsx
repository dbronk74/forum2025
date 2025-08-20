import { useEffect, useState } from 'react'
export default function ReactionMeter(){
  const [pulse,setPulse]=useState(0)
  useEffect(()=>{ const id=window.setInterval(()=>setPulse(p=>(p+Math.floor(Math.random()*15))%100),800); return ()=>window.clearInterval(id)},[])
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-3">
      <h3 className="text-lg font-semibold">Reaction Pulse</h3>
      <div className="h-2 w-full rounded bg-slate-800 overflow-hidden"><div className="h-full bg-glyph" style={{width:`${pulse}%`}} /></div>
      <div className="text-xs text-slate-400">{pulse}%</div>
    </div>
  )
}