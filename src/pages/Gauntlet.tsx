import RoundControls from '@/components/gauntlet/RoundControls'
import Scoreboard from '@/components/gauntlet/Scoreboard'
import DuelFlow from '@/components/gauntlet/DuelFlow'
import PrestigeMeter from '@/components/gauntlet/PrestigeMeter'
import SpectatorHUD from '@/components/gauntlet/SpectatorHUD'
import TimerPanel from '@/components/gauntlet/TimerPanel'
import VotePanel from '@/components/gauntlet/VotePanel'
export default function Gauntlet() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">The Gauntlet</h2>
      <p className="text-slate-300">Functional scaffold with duel flow, timer, prestige, spectator HUD, and audience vote.</p>
      <RoundControls />
      <div className="grid gap-4 md:grid-cols-2">
        <DuelFlow /><TimerPanel /><PrestigeMeter /><SpectatorHUD />
      </div>
      <Scoreboard />
      <VotePanel />
    </section>
  )
}