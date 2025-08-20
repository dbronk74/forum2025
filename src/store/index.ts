import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import duel from './duelSlice'
import prestige from './prestigeSlice'
import spectator from './spectatorSlice'
import arena from './arenaSlice'
import oracle from './oracleSlice'
import vault from './vaultSlice'

interface AppState { branch: string }
const initialState: AppState = { branch: 'forum' }

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBranch: (state, action: PayloadAction<string>) => { state.branch = action.payload },
  },
})

export const { setBranch } = appSlice.actions

export const store = configureStore({
  reducer: { app: appSlice.reducer, duel, prestige, spectator, arena, oracle, vault },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch