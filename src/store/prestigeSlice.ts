import { createSlice } from '@reduxjs/toolkit'
export interface PrestigeState { score: number }
const initialState: PrestigeState = { score: 0 }
const prestigeSlice = createSlice({
  name: 'prestige', initialState,
  reducers: {
    addPrestige: (s) => { s.score += 1 },
    removePrestige: (s) => { s.score = Math.max(0, s.score - 1) },
    resetPrestige: () => initialState,
  }
})
export const { addPrestige, removePrestige, resetPrestige } = prestigeSlice.actions
export default prestigeSlice.reducer