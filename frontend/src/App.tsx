import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AdminLayout from './components/admin/AdminLayout'
import Home from './pages/Home'
import Occasions from './pages/Occasions'
import LuxuryHampers from './pages/LuxuryHampers'
import IndoorPlants from './pages/IndoorPlants'
import CategoryListing from './pages/CategoryListing'
import ProductDetail from './pages/ProductDetail'
import WeddingEvents from './pages/WeddingEvents'
import About from './pages/About'
import BespokeInquiry from './pages/BespokeInquiry'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import TrackOrder from './pages/TrackOrder'
import Dashboard from './pages/admin/Dashboard'
import Orders from './pages/admin/Orders'
import AdminPlaceholder from './pages/admin/AdminPlaceholder'

export default function App() {
  return (
    <Routes>
      {/* Customer-facing storefront */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/occasions" element={<Occasions />} />
        <Route path="/products/luxury-hampers" element={<LuxuryHampers />} />
        <Route path="/products/indoor-plants" element={<IndoorPlants />} />
        <Route path="/products/:categorySlug" element={<CategoryListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wedding-events" element={<WeddingEvents />} />
        <Route path="/about" element={<About />} />
        <Route path="/bespoke" element={<BespokeInquiry />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Route>

      {/* Owner console (separate layout: sidebar + top bar) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        {/* Every admin page not built yet shows the placeholder. */}
        <Route path="*" element={<AdminPlaceholder />} />
      </Route>
    </Routes>
  )
}
