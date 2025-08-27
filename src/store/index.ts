import { configureStore, createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit'
import duel from './duelSlice'
import prestige from './prestigeSlice'
import spectator from './spectatorSlice'
import arena from './arenaSlice'
import oracle from './oracleSlice'
import vault from './vaultSlice'
import { loadState, saveState, throttle } from './persist'

interface AppState {
  branch: string
}
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

// ---- explicit root reducer to avoid TS union inference issues
const rootReducer = combineReducers({
  app: appSlice.reducer,
  duel,
  prestige,
  spectator,
  arena,
  oracle,
  vault,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// --- hydrate from localStorage (safe on SSR)
const PERSIST_KEY = 'forum2025'
const preloaded = typeof window !== 'undefined' ? loadState<any>(PERSIST_KEY) : undefined

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloaded, // may be a partial; that’s fine
  devTools: true,
})

// --- persist selected slices (throttled)
const selectPersist = () => {
  const s = store.getState() as RootState
  return {
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
