import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

// This wraps every customer-facing page with the same Header, Footer and
// WhatsApp button, so we don't repeat them in every page file.
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="w-full pt-24 flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
