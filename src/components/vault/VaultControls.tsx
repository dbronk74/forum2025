import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { credit, debit } from '@/store/vaultSlice'
export default function VaultControls(){
  const dispatch=useAppDispatch(); const balance=useAppSelector(s=>s.vault.balance); const [amount,setAmount]=useState(5)
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-3">
      <h3 className="text-lg font-semibold">Monetization HUD</h3>
      <div className="text-slate-300">Balance: <span className="text-portal font-semibold">${'{'}balance{'}'}</span></div>
      <div className="flex items-center gap-2">
        <input type="number" value={amount} onChange={e=>setAmount(parseInt(e.target.value||'0',10))} className="w-24 rounded-xl bg-slate-800 px-3 py-1 outline-none" />
        <button onClick={()=>dispatch(credit({amount}))} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Credit</button>
        <button onClick={()=>dispatch(debit({amount}))} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Debit</button>
      </div>
    </div>
  )
}