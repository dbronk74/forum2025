import OraclePanel from '@/components/oracle/OraclePanel'
import TimelessTranslator from '@/components/oracle/TimelessTranslator'
export default function Oracle(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Oracle</h2>
      <p className="text-slate-300">Prototype: ask the Oracle (simulated) and try the Timeless Translator styles.</p>
      <div className="grid gap-4 md:grid-cols-2"><OraclePanel /><TimelessTranslator /></div>
    </section>
  )
}