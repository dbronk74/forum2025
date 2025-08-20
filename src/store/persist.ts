// src/store/persist.ts
export function loadState<T = any>(key = 'forum2025'): T | undefined {
    try {
      const s = localStorage.getItem(key)
      return s ? (JSON.parse(s) as T) : undefined
    } catch {
      return undefined
    }
  }
  
  export function saveState(key: string, state: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch {
      /* ignore quota or privacy mode errors */
    }
  }
  
  // Simple throttle (no lodash)
  export function throttle<F extends (...a: any[]) => void>(fn: F, wait = 500) {
    let last = 0
    let timer: number | undefined
    return (...args: Parameters<F>) => {
      const now = Date.now()
      const remaining = wait - (now - last)
      if (remaining <= 0) {
        last = now
        fn(...args)
      } else if (!timer) {
        timer = window.setTimeout(() => {
          last = Date.now()
          timer = undefined
          fn(...args)
        }, remaining)
      }
    }
  }
  