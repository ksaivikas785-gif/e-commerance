import { useState } from 'react'

export default function Header({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false)

  const links = ['New', 'Jackets', 'Tops', 'Bottoms', 'Footwear']

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl tracking-wide text-ink">
          VOLT
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            
              key={link}
              href="#shop"
              className="font-body text-sm font-medium text-dim transition hover:text-ink"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-violet"
            aria-label="Open cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.6A1 1 0 0 0 5.6 19H17M17 13v6M11 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-coral font-tag text-[11px] text-base">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {links.map((link) => (
            <a key={link} href="#shop" className="py-2 font-body text-sm text-dim hover:text-ink">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}