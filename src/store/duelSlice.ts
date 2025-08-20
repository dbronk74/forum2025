import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface DuelState { round: number; status: 'idle'|'live'|'paused'|'finished'; topic: string }
const initialState: DuelState = { round: 1, status: 'idle', topic: 'Resolved: Placeholder topic' }
const duelSlice = createSlice({
  name: 'duel', initialState,
  reducers: {
    setTopic: (s, a: PayloadAction<string>) => { s.topic = a.payload },
    start: (s) => { s.status = 'live' },
    pause: (s) => { s.status = 'paused' },
    finish: (s) => { s.status = 'finished' },
    nextRound: (s) => { s.round += 1 },
    reset: () => initialState,
  },
})
export const { setTopic, start, pause, finish, nextRound, reset } = duelSlice.actions
export default duelSlice.reducer