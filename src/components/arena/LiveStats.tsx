import { useEffect, useState } from 'react'
export default function LiveStats() {
  const [wpm,setWpm]=useState(110); const [accuracy,setAccuracy]=useState(98)
  useEffect(()=>{ const id=window.setInterval(()=>{ setWpm(100+Math.floor(Math.random()*40)); setAccuracy(96+Math.floor(Math.random()*4)) },1200); return ()=>window.clearInterval(id)},[])
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-2">
      <h3 className="text-lg font-semibold">Live Speech Stats</h3>
      <div className="text-slate-300">WPM: <span className="text-slate-100">{wpm}</span></div>
      <div className="text-slate-300">Accuracy: <span className="text-slate-100">{accuracy}%</span></div>
    </div>
  )
}