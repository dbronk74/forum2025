import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import duel from './duelSlice'
import prestige from './prestigeSlice'
import spectator from './spectatorSlice'
import arena from './arenaSlice'
import oracle from './oracleSlice'
import vault from './vaultSlice'
import { loadState, saveState, throttle } from './persist'

interface AppState { branch: string }
const initialState: AppState = { branch: 'forum' }

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBranch: (state, action: PayloadAction<string>) => {
      state.branch = action.payload
    },
  },
})

export const { setBranch } = appSlice.actions

// --- hydrate from localStorage (safe if empty)
const PERSIST_KEY = 'forum2025'
const preloaded = loadState<any>(PERSIST_KEY)

// Build store with (optional) preloaded state
export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    duel,
    prestige,
    spectator,
    arena,
    oracle,
    vault,
  },
  preloadedState: preloaded,
  devTools: true,
})

// --- persist selected slices (throttled)
const selectPersist = () => {
  const s = store.getState()
  return {
    // keep it lean but useful; add/remove as you like
    duel: s.duel,
    prestige: s.prestige,
    spectator: s.spectator,
    arena: s.arena,
    oracle: s.oracle,
    vault: s.vault,
  }
}

store.subscribe(
  throttle(() => {
    saveState(PERSIST_KEY, selectPersist())
  }, 800)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
