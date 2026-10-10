import { useContext } from 'react'
import { ToastContext } from '../context/toastContext'

// Usage: const { showToast } = useToast(); showToast('Saved!', 'success')
export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}