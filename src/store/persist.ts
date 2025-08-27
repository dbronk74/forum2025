// src/store/persist.ts
const hasStorage =
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'

export function loadState<T = any>(key = 'forum2025'): T | undefined {
  if (!hasStorage) return undefined
  try {
    const s = window.localStorage.getItem(key)
    return s ? (JSON.parse(s) as T) : undefined
  } catch {
    return undefined
  }
}

export function saveState(key: string, state: unknown) {
  if (!hasStorage) return
  try {
    window.localStorage.setItem(key, JSON.stringify(state))
  } catch {
    /* ignore quota/privacy errors */
  }
}

// tiny throttle without lodash; uses global setTimeout (no window.*)
export function throttle<F extends (...a: any[]) => void>(fn: F, wait = 500) {
  let last = 0
  let timer: ReturnType<typeof setTimeout> | undefined
  return (...args: Parameters<F>) => {
    const now = Date.now()
    const remaining = wait - (now - last)
    if (remaining <= 0) {
      last = now
      fn(...args)
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now()
        timer = undefined
        fn(...args)
      }, remaining)
    }
  }
}
