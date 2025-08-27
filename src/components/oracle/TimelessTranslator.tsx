import { useState } from 'react'

type Tone = 'Stoic' | 'Mystical' | 'Modern Therapist' | 'Poet'

export default function TimelessTranslator() {
  const [input, setInput] = useState<string>('“The unexamined life is not worth living.” — Socrates')
  const [tone, setTone] = useState<Tone>('Stoic')
  const [out, setOut] = useState<string>('')

  function translate(text: string, t: Tone) {
    const base = text.replace(/^["'“”]+|["'“”]+$/g, '')
    const map: Record<Tone, string> = {
      Stoic: `In plain terms: ${base}. Focus on what you control; accept what you don’t.`,
      Mystical: `Imagine a lantern in fog: ${base}. Let intuition braid with reason; move with quiet wonder.`,
      'Modern Therapist': `Let’s ground this: ${base}. Notice your feelings, set a boundary, and take one small step.`,
      Poet: `Hear it as a heartbeat: ${base}. Turn your face to the wind and keep walking.`,
    }
    return map[t]
  }

  const tones: Tone[] = ['Stoic', 'Mystical', 'Modern Therapist', 'Poet']

  return (
    <div className="space-y-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
      <div className="flex flex-wrap gap-2">
        {tones.map((t) => (
          <button
            key={t}
            onClick={() => setTone(t)}
            className={`px-3 py-1 rounded-lg border ${
              tone === t ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 border-slate-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
        placeholder="Type something timeless…"
      />

      <div className="flex gap-2">
        <button
          onClick={() => setOut(translate(input, tone))}
          className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
        >
          Translate
        </button>
        <button
          onClick={() => {
            setInput('')
            setOut('')
          }}
          className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white"
        >
          Clear
        </button>
      </div>

      {out && (
        <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-3 text-slate-200">{out}</div>
      )}
    </div>
  )
}
