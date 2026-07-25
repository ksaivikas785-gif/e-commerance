export default function Cart({ open, items, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-line bg-raised transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line p-6">
          <h2 className="font-display text-2xl text-ink">Your bag</h2>
          <button onClick={onClose} className="text-dim hover:text-ink" aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="font-body text-sm text-dim">Your bag is empty. Go find something bold.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 border-b border-line pb-4">
                  <img src={item.image} alt={item.name} className="h-20 w-16 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <p className="font-body text-sm font-semibold text-ink">{item.name}</p>
                    <p className="font-tag text-xs text-dim">Qty {item.qty}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-tag text-xs text-ink">
                        {'\u20B9'}
                        {(item.price * item.qty).toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="font-body text-xs text-coral hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-line p-6">
          <div className="mb-4 flex items-center justify-between font-body text-sm text-dim">
            <span>Subtotal</span>
            <span className="font-tag text-ink">
              {'\u20B9'}
              {total.toLocaleString('en-IN')}
            </span>
          </div>
          <button
            disabled={items.length === 0}
            className="w-full rounded-full bg-violet py-3 font-body text-sm font-semibold text-ink transition hover:bg-coral disabled:cursor-not-allowed disabled:opacity-40"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}