import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { ask, answer } from '@/store/oracleSlice'
const canned=['Consider the inverse and see if the claim still holds.','Break the problem into three simpler invariants.','The limiting case reveals the correct parameterization.','Beware: your prior is anchoring too strongly on recent evidence.']
export default function OraclePanel(){
  const [input,setInput]=useState('How should we open the debate?')
  const dispatch=useAppDispatch(); const {history,busy}=useAppSelector(s=>s.oracle)
  useEffect(()=>{ if(!busy) return; const id=window.setTimeout(()=>{ const msg=canned[Math.floor(Math.random()*canned.length)]; dispatch(answer(msg)) },800); return ()=>window.clearTimeout(id)},[busy,dispatch])
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 flex flex-col gap-3">
      <h3 className="text-lg font-semibold">The Quiet Oracle</h3>
      <div className="h-48 overflow-y-auto space-y-2 pr-1">{history.map(m=>(<div key={m.id} className={m.role==='user'?'text-slate-200':'text-glyph'}><span className="text-xs opacity-60 mr-2">{m.role}:</span>{m.text}</div>))}</div>
      <div className="flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 rounded-xl bg-slate-800 px-3 py-1 outline-none" placeholder="Ask the Oracle…" />
        <button disabled={busy||!input.trim()} onClick={()=>dispatch(ask(input.trim()))} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700 disabled:opacity-50">{busy?'Thinking…':'Ask'}</button>
      </div>
    </div>
  )
}