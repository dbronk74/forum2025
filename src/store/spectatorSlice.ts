import { createSlice } from '@reduxjs/toolkit'
export interface SpectatorState { viewers: number; reactions: number }
const initialState: SpectatorState = { viewers: 0, reactions: 0 }
const spectatorSlice = createSlice({
  name: 'spectator', initialState,
  reducers: {
    join: (s) => { s.viewers += 1 },
    leave: (s) => { s.viewers = Math.max(0, s.viewers - 1) },
    react: (s) => { s.reactions += 1 },
    resetSpectator: () => initialState,
  }
})
export const { join, leave, react, resetSpectator } = spectatorSlice.actions
export default spectatorSlice.reducer