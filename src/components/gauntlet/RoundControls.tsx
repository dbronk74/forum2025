import { useState } from 'react'

type Props = {
  onApply?: (opts: { duration: number; topic: string }) => void
  onReset?: () => void
}

export default function RoundControls({ onApply, onReset }: Props) {
  const [duration, setDuration] = useState<number>(120)
  const [topic, setTopic] = useState<string>('Open topic')

  return (
    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
      <h3 className="font-semibold text-slate-100">Round Controls</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <label className="flex items-center gap-2">
          <span className="text-sm text-slate-300">Length</span>
          <select
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value, 10))}
            className="px-2 py-1 bg-slate-800 rounded-lg border border-slate-700"
          >
            {[60, 90, 120, 180, 240, 300].map((s) => (
              <option key={s} value={s}>{s}s</option>
            ))}
          </select>
        </label>

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Debate topic…"
          className="px-3 py-2 bg-slate-800 rounded-lg border border-slate-700"
        />

        <div className="flex gap-2">
          <button
            onClick={() => onApply?.({ duration, topic })}
            className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
          >
            Apply
          </button>
          <button
            onClick={() => { setDuration(120); setTopic('Open topic'); onReset?.() }}
            className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
