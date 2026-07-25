export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-2xl text-ink">VOLT</p>
          <p className="mt-3 font-body text-sm text-dim">
            Fashion for people who dress with intent. Designed in-house, made to last.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-tag text-xs uppercase tracking-wide text-dim">Shop</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-dim">
              <li><a href="#shop" className="hover:text-ink">New arrivals</a></li>
              <li><a href="#shop" className="hover:text-ink">Bestsellers</a></li>
              <li><a href="#shop" className="hover:text-ink">Sale</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-tag text-xs uppercase tracking-wide text-dim">Support</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-dim">
              <li><a href="#" className="hover:text-ink">Shipping</a></li>
              <li><a href="#" className="hover:text-ink">Returns</a></li>
              <li><a href="#" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-tag text-xs uppercase tracking-wide text-dim">Follow</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-dim">
              <li><a href="#" className="hover:text-ink">Instagram</a></li>
              <li><a href="#" className="hover:text-ink">TikTok</a></li>
              <li><a href="#" className="hover:text-ink">Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 text-center font-body text-xs text-dim">
        © {new Date().getFullYear()} VOLT. All rights reserved.
      </div>
    </footer>
  )
}