import { ReactNode } from 'react'

type Props = { title?: string; subtitle?: string; right?: ReactNode; children?: ReactNode; className?: string }
export default function Card({ title, subtitle, right, children, className='' }: Props){
  return (
    <section className={`card p-4 ${className}`}>
      {(title || right) && (
        <div className="flex items-center justify-between mb-3">
          <div>
            {title && <h3 className="font-semibold">{title}</h3>}
            {subtitle && <p className="subtle text-sm">{subtitle}</p>}
          </div>
          {right}
        </div>
      )}
      {children}
    </section>
  )
}
