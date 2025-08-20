import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface LedgerItem { id: string; type: 'credit'|'debit'; amount: number; note?: string; ts: number }
interface VaultState { balance: number; ledger: LedgerItem[] }
const initialState: VaultState = { balance: 100, ledger: [] }
const vaultSlice = createSlice({
  name: 'vault', initialState,
  reducers: {
    credit: (s, a: PayloadAction<{amount:number; note?:string}>) => { s.balance += a.payload.amount; s.ledger.unshift({ id: crypto.randomUUID(), type:'credit', amount:a.payload.amount, note:a.payload.note, ts: Date.now() }) },
    debit: (s, a: PayloadAction<{amount:number; note?:string}>) => { s.balance = Math.max(0, s.balance - a.payload.amount); s.ledger.unshift({ id: crypto.randomUUID(), type:'debit', amount:a.payload.amount, note:a.payload.note, ts: Date.now() }) },
    resetVault: () => initialState,
  }
})
export const { credit, debit, resetVault } = vaultSlice.actions
export default vaultSlice.reducer