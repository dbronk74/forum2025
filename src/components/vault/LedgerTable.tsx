import { useAppSelector } from '@/store/hooks'
export default function LedgerTable(){
  const rows=useAppSelector(s=>s.vault.ledger)
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 space-y-2">
      <h3 className="text-lg font-semibold">Credit Ledger</h3>
      <div className="text-xs text-slate-400">Most recent first</div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400"><tr><th className="py-1">Type</th><th className="py-1">Amount</th><th className="py-1">Note</th><th className="py-1">Time</th></tr></thead>
          <tbody>{rows.map(r=>(<tr key={r.id} className="border-t border-slate-800/70"><td className="py-1">{r.type}</td><td className="py-1">${'{'}r.amount{'}'}</td><td className="py-1">{r.note||'—'}</td><td className="py-1">{new Date(r.ts).toLocaleTimeString()}</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  )
}