import { useParams, Link } from 'react-router-dom'
import data from '@/data/threads.json'

export default function Thread(){
  const { id } = useParams<{id:string}>()
  const thread = (data as any[]).find(t => t.id === id)
  if (!thread) {
    return <div className="space-y-2"><p className="text-slate-300">Thread not found.</p><Link className="text-emerald-400 underline" to="/forum">Back to Forum</Link></div>
  }
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{thread.title}</h2>
      <div className="text-sm text-slate-400">Author: {thread.author} • Replies: {thread.replies} • Updated: {thread.lastUpdate}</div>
      <div className="rounded-xl p-4 bg-slate-900/60 border border-slate-800">
        <p>This is a placeholder thread view. We’ll wire real posts later.</p>
      </div>
      <Link className="text-emerald-400 underline" to="/forum">← Back to Forum</Link>
    </section>
  )
}
