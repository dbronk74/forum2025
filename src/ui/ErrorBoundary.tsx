// src/ui/ErrorBoundary.tsx
import { Component, ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean; message?: string }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(err: unknown): State {
    return { hasError: true, message: err instanceof Error ? err.message : String(err) }
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Optional: send to analytics/logging here
    console.error('ErrorBoundary caught', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false, message: undefined })
    // Do a soft reload to clear transient state
    if (typeof window !== 'undefined') window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-page py-10">
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
            <p className="subtle mb-4">A temporary error occurred. Try reloading the page.</p>
            <button className="btn-primary" onClick={this.handleReset}>Reload</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
