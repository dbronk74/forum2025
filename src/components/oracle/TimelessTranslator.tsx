import { useState } from 'react'
export default function TimelessTranslator(){
  const [text,setText]=useState('Speak plainly, yet carry depth.')
  const [style,setStyle]=useState<'formal'|'casual'|'poetic'>('formal')
  const transform=(t:string,s:string)=> s==='formal'?'In summary: '+t : s==='casual'?'TL;DR: '+t : '⟪ '+t+' ⟫'
  const out = transform(text, style)
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-3">
      <h3 className="text-lg font-semibold">Timeless Translator</h3>
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full h-24 rounded-xl bg-slate-800 p-3 outline-none" />
      <div className="flex gap-2">
        <select value={style} onChange={e=>setStyle(e.target.value as any)} className="rounded-xl bg-slate-800 px-3 py-1">
          <option value="formal">Formal</option><option value="casual">Casual</option><option value="poetic">Poetic</option>
        </select>
      </div>
      <div className="rounded-xl bg-slate-900/60 p-3 text-slate-200">{out}</div>
    </div>
  )
}