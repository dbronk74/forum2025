import { useMemo, useState } from 'react'

type Row = { id: string; type: 'credit' | 'debit'; amount: number; note: string; ts: string }

const seed: Row[] = [
  { id: 'r1', type: 'credit', amount: 15, note: 'Ad reward', ts: '2025-08-18' },
  { id: 'r2', type: 'debit', amount: 2, note: 'Tip to creator', ts: '2025-08-19' },
  { id: 'r3', type: 'credit', amount: 8, note: 'Debate win', ts: '2025-08-20' },
]

export default function LedgerTable() {
  const [filter, setFilter] = useState<'all' | 'credit' | 'debit'>('all')

  const rows = useMemo(
    () => seed.filter((r) => (filter === 'all' ? true : r.type === filter)),
    [filter]
  )

  const totals = useMemo(
    () => ({
      credits: seed.filter((r) => r.type === 'credit').reduce((s, r) => s + r.amount, 0),
      debits: seed.filter((r) => r.type === 'debit').reduce((s, r) => s + r.amount, 0),
    }),
    []
  )

  const balance = totals.credits - totals.debits

  return (
    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-300">
          Balance: <span className="font-semibold text-emerald-400">{balance}</span>
        </div>
        <div className="flex gap-2">
          {(['all', 'credit', 'debit'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1 rounded-lg border ${
                filter === t ? 'bg-slate-800 border-slate-600' : 'bg-slate-900 border-slate-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-400">
              <th className="p-2">Date</th>
              <th className="p-2">Type</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-slate-800">
                <td className="p-2">{r.ts}</td>
                <td className="p-2">{r.type}</td>
                <td className="p-2">{r.amount}</td>
                <td className="p-2">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
