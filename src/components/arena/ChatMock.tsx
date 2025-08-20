import { useState } from 'react'
export default function ChatMock(){
  const [input,setInput]=useState(''); const [messages,setMessages]=useState<string[]>(['Welcome to WorldSpeak Arena!'])
  const send=()=>{ if(!input.trim()) return; setMessages(m=>[...m,input.trim()]); setInput('') }
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 flex flex-col gap-3">
      <h3 className="text-lg font-semibold">Chat</h3>
      <div className="h-40 overflow-y-auto space-y-1 pr-1">{messages.map((m,i)=>(<div key={i} className="text-sm text-slate-200">{m}</div>))}</div>
      <div className="flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Say something…" className="flex-1 rounded-xl bg-slate-800 px-3 py-1 outline-none" />
        <button onClick={send} className="rounded-xl bg-slate-800 px-3 py-1 hover:bg-slate-700">Send</button>
      </div>
    </div>
  )
}