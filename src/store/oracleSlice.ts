import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface OracleMsg { id: string; role: 'user'|'oracle'; text: string; ts: number }
interface OracleState { history: OracleMsg[]; busy: boolean }
const initialState: OracleState = { history: [], busy: false }
const oracleSlice = createSlice({
  name: 'oracle', initialState,
  reducers: {
    ask(state, action: PayloadAction<string>){ state.busy = true; state.history.push({ id: crypto.randomUUID(), role:'user', text: action.payload, ts: Date.now() }) },
    answer(state, action: PayloadAction<string>){ state.history.push({ id: crypto.randomUUID(), role:'oracle', text: action.payload, ts: Date.now() }); state.busy = false },
    resetOracle(){ return initialState }
  }
})
export const { ask, answer, resetOracle } = oracleSlice.actions
export default oracleSlice.reducer