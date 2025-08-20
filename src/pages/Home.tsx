export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to The Forum 2025</h1>
      <p className="text-portal">Hello Dan — alias @/* and Tailwind are working.</p>
      <p className="text-slate-300">
        This build uses consolidated routing, a unified BranchHeader, and a single Redux store.
        Paths alias <code>@/*</code> resolve to <code>src/*</code>.
      </p>
      <ul className="list-disc pl-6 text-slate-300">
        <li>Router: <code>src/routes.tsx</code></li>
        <li>Store: <code>src/store/index.ts</code></li>
        <li>Header: <code>src/ui/BranchHeader.tsx</code></li>
        <li>Layout: <code>src/ui/Layout.tsx</code></li>
      </ul>
    </section>
  )
}