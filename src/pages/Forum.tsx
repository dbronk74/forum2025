import { Link } from 'react-router-dom'
import threads from '@/data/threads.json'

type ThreadMeta = {
  id: string
  title: string
  author: string
  replies: number
  updated: string
}

export default function Forum() {
  const list = threads as ThreadMeta[]

  return (
    <section className="space-y-6">
      <div>
        <h1 className="h1">Forum</h1>
        <p className="subtle">Thread list (static for now). Click any thread to open its view.</p>
      </div>

      <div className="space-y-3">
        {list.map((t) => (
          <Link
            key={t.id}
            to={`/forum/${t.id}`}
            className="card p-4 hover:border-emerald-500 transition block"
          >
            <div className="font-medium">{t.title}</div>
            <div className="subtle text-xs mt-1">
              by {t.author} • {t.replies} replies • {t.updated}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
