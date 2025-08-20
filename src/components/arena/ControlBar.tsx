import { useState } from 'react'
export default function ControlBar(){
  const [mic,setMic]=useState(false), [cam,setCam]=useState(false), [rec,setRec]=useState(false)
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 flex flex-wrap gap-2">
      <button onClick={()=>setMic(!mic)} className={`rounded-xl px-3 py-1 ${mic?'bg-emerald-800':'bg-slate-800'} hover:bg-slate-700`}>{mic?'Mic On':'Mic Off'}</button>
      <button onClick={()=>setCam(!cam)} className={`rounded-xl px-3 py-1 ${cam?'bg-emerald-800':'bg-slate-800'} hover:bg-slate-700`}>{cam?'Cam On':'Cam Off'}</button>
      <button onClick={()=>setRec(!rec)} className={`rounded-xl px-3 py-1 ${rec?'bg-emerald-800':'bg-slate-800'} hover:bg-slate-700`}>{rec?'Recording':'Record'}</button>
    </div>
  )
}