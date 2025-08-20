import VaultControls from '@/components/vault/VaultControls'
import LedgerTable from '@/components/vault/LedgerTable'
export default function Vault(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Vault</h2>
      <p className="text-slate-300">Prototype: manage balance and see a real-time ledger.</p>
      <div className="grid gap-4 md:grid-cols-2"><VaultControls /><LedgerTable /></div>
    </section>
  )
}