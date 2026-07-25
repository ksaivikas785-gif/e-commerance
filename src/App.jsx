import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import products from './data/products.js'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="min-h-screen bg-base">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <ProductGrid products={products} onAddToCart={addToCart} />
      <Footer />
      <Cart
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  )
}