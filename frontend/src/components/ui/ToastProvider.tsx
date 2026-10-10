import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react'
import { CircleCheck, CircleAlert, Info, X } from 'lucide-react'
import { ToastContext, type ToastType } from '../../context/toastContext'

interface Toast {
  id: number
  message: string
  type: ToastType
}

const STYLES: Record<ToastType, string> = {
  success: 'bg-primary text-on-primary',
  error: 'bg-error text-on-error',
  info: 'bg-inverse-surface text-inverse-on-surface',
}

const ICONS = { success: CircleCheck, error: CircleAlert, info: Info }

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const nextId = useRef(1)

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string, type: ToastType = 'success') => {
      const id = nextId.current++
      setToasts((prev) => [...prev, { id, message, type }])
      setTimeout(() => dismiss(id), 4000)
    },
    [dismiss]
  )

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2 max-w-[calc(100vw-3rem)]"
        role="status"
        aria-live="polite"
      >
        {toasts.map((t) => {
          const Icon = ICONS[t.type]
          return (
            <div key={t.id} className={`flex items-center gap-3 pl-4 pr-2 py-3 rounded-lg shadow-lg text-body-sm ${STYLES[t.type]}`}>
              <Icon size={18} className="shrink-0" />
              <span className="flex-1">{t.message}</span>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
                className="w-7 h-7 rounded flex items-center justify-center opacity-80 hover:opacity-100"
              >
                <X size={16} />
              </button>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}