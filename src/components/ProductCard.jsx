export default function ProductCard({ product, onAddToCart, tall }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <div className={`relative overflow-hidden ${tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-violet px-3 py-1 font-tag text-[11px] uppercase tracking-wide text-ink">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="font-tag text-[11px] uppercase tracking-wide text-dim">{product.category}</p>
          <h3 className="font-body text-base font-semibold text-ink">{product.name}</h3>
          <p className="font-body text-xs text-dim">{product.color}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="price-tag">
            {'\u20B9'}
            {product.price.toLocaleString('en-IN')}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-full border border-line px-4 py-2 font-body text-xs font-semibold text-ink transition hover:border-violet hover:bg-violet"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}