import { useState, useMemo } from 'react'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category))
    return ['All', ...unique]
  }, [products])

  const filtered =
    activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-tag text-xs uppercase tracking-[0.3em] text-coral">Shop</p>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">The full rack</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-2 font-body text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'border-violet bg-violet text-ink'
                  : 'border-line text-dim hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {filtered.map((product) => (
          <div key={product.id} className={product.featured ? 'md:col-span-2' : ''}>
            <ProductCard product={product} onAddToCart={onAddToCart} tall={product.featured} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-body text-sm text-dim">
          Nothing in this category yet. Check back soon.
        </p>
      )}
    </section>
  )
}