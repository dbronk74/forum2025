import StreamStatus from '@/components/arena/StreamStatus'
import LiveStats from '@/components/arena/LiveStats'
import ReactionMeter from '@/components/arena/ReactionMeter'
import ControlBar from '@/components/arena/ControlBar'
import ChatMock from '@/components/arena/ChatMock'
export default function WorldSpeakArena(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">WorldSpeak Arena</h2>
      <p className="text-slate-300">Scaffold with fake connection stats, reaction pulse, chat, and simple toggles.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <StreamStatus /><LiveStats /><ReactionMeter /><ChatMock />
      </div>
      <ControlBar />
    </section>
  )
}