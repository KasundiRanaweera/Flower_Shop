import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import CategoryListing from './pages/CategoryListing'
import ProductDetail from './pages/ProductDetail'
import WeddingEvents from './pages/WeddingEvents'
import About from './pages/About'
import BespokeInquiry from './pages/BespokeInquiry'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import TrackOrder from './pages/TrackOrder'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
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
    </Routes>
  )
}

export default App
