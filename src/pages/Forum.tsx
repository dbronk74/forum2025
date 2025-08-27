import { Link } from 'react-router-dom'
import data from '@/data/threads.json'

export default function Forum(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Forum</h2>
      <p className="text-slate-300">Thread list (static for now). Click any thread to open its view.</p>
      <div className="grid gap-3">
        {(data as any[]).map(t => (
          <Link key={t.id} to={`/forum/${t.id}`} className="rounded-xl p-4 bg-slate-900/60 border border-slate-800 hover:border-emerald-500 transition">
            <div className="font-medium">{t.title}</div>
            <div className="text-xs text-slate-400">by {t.author} • {t.replies} replies • {t.lastUpdate}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
