import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

export default function Header({ cartCount = 0, onSearch, onBagClick }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>✨ Buy 5 or more to get free delivery</span>
        <i>•</i>
        <span>Tamil Nadu delivery ₹40</span>
        <i>•</i>
        <span>Fast delivery in 2–5 days</span>
      </div>

      <header className="site-header">
        {/* Logo */}
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="S Square Elite home"
        >
          <img
            src="/images/logo.jpeg"
            alt="S Square Elite logo"
            className="brand-logo"
          />

          <span className="brand-text">
            <b>S SQUARE</b>
            <em>Elite</em>
            <small>G I F T&nbsp; S H O P</small>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Navigation */}
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink
            to="/categories"
            onClick={() => setOpen(false)}
          >
            Categories
          </NavLink>

          <a href="/#products" onClick={() => setOpen(false)}>
            Products
          </a>

          <a href="/#gift-sets" onClick={() => setOpen(false)}>
            Gift Sets
          </a>

          <a href="/#footer" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        {/* Search and shopping bag */}
        <div className="header-actions">
          <label className="search-box">
            <Search size={17} />

            <input
              type="search"
              placeholder="Search gifts..."
              aria-label="Search gifts"
              onChange={(event) => onSearch?.(event.target.value)}
            />
          </label>

          <button
            type="button"
            className="bag-button"
            onClick={() => onBagClick?.()}
            aria-label={`Open shopping bag, ${cartCount} items`}
          >
            <ShoppingCart size={18} />
            <span>Bag</span>
            <b>{cartCount}</b>
          </button>
        </div>
      </header>
    </>
  );
}