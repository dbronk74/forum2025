import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

export default function Card({ className = '', children }: Props) {
  return (
    <div className={`card p-4 ${className}`.trim()}>
      {children}
    </div>
  )
}
