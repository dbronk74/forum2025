import { createSlice } from '@reduxjs/toolkit'
export type Conn = 'disconnected'|'connecting'|'connected'
export interface ArenaState { connection: Conn; bitrateKbps: number; latencyMs: number }
const initialState: ArenaState = { connection: 'disconnected', bitrateKbps: 0, latencyMs: 0 }
const arenaSlice = createSlice({
  name: 'arena', initialState,
  reducers: {
    connect(s){ s.connection='connecting' },
    connected(s){ s.connection='connected' },
    disconnect(s){ s.connection='disconnected'; s.bitrateKbps=0; s.latencyMs=0 },
    setBitrate(s,{payload}:{payload:number}){ s.bitrateKbps=payload },
    setLatency(s,{payload}:{payload:number}){ s.latencyMs=payload },
  }
})
export const { connect, connected, disconnect, setBitrate, setLatency } = arenaSlice.actions
export default arenaSlice.reducer