import { useMemo, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Gift,
  Heart,
  PackageCheck,
  ShieldCheck,
  Truck,
  Sparkles,
  Instagram,
  Mail,
  Check,
  X,
  ShoppingBag,
  Trash2
} from 'lucide-react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Reviews from './components/Reviews';
import { ShopByOccasion, GiftBoxBuilder, DeliveryEstimator, QuickViewModal } from './components/Enhancements';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import { categories, products } from './data/products';

function Home({onAdd,search,wishlist,onWishlist,onQuickView}) {
 const shown=useMemo(()=>products.filter(p=>(p.name+' '+p.category+' '+p.description).toLowerCase().includes(search.toLowerCase())),[search]);
 return <main><section className="hero"><div className="hero-photo"/><div className="hero-glow"/><div className="hero-content"><span className="hero-pill"><Sparkles size={14}/> LITTLE MOMENTS, BIG SMILES</span><h1>Gifts that make<br/><span>hearts happy.</span></h1><p>Toys · Gifts · Cute Lamps · More Happiness</p><div className="hero-buttons"><a className="primary-button" href="#products">Shop the collection <ArrowUpRight size={18}/></a><Link className="secondary-button" to="/categories">Find a gift <Gift size={17}/></Link></div><div className="hero-stats"><div><strong>10K+</strong><span>Happy orders</span></div><div><strong>4.9 <span className="gold-star">★</span></strong><span>Customer rating</span></div><div><strong>100%</strong><span>Secure checkout</span></div></div></div><div className="hero-note"><span>🎁</span><div><strong>A little joy, wrapped up</strong><small>Gifts for every kind of smile</small></div></div><a className="scroll-cue" href="#categories">SCROLL TO EXPLORE <span>→</span></a></section>
 <section className="benefit-strip"><div><Truck/><span><strong>Careful delivery</strong><small>Across Tamil Nadu</small></span></div><div><Gift/><span><strong>Gift-ready picks</strong><small>For every little moment</small></span></div><div><ShieldCheck/><span><strong>Secure checkout</strong><small>Shop with confidence</small></span></div><div><Heart/><span><strong>Chosen with love</strong><small>Joy in every package</small></span></div></section>
 <section className="section-wrap categories-section" id="categories"><div className="section-heading"><div><span className="eyebrow">A WORLD OF LITTLE WONDERS</span><h2>Find their <span>happy place.</span></h2><p>From playful picks to cosy little lights, start with what they love.</p></div><Link className="text-link" to="/categories">Explore all categories <ArrowUpRight size={16}/></Link></div><div className="category-grid home-category-grid">{categories.slice(0,7).map((c,i)=><Link to={'/category/'+c.slug} className={'category-card '+c.color} key={c.slug}><span className="category-number">{String(i+1).padStart(2,'0')}</span><span className="category-emoji">{c.emoji}</span><h3>{c.name}</h3><p>{c.desc}</p><span className="category-arrow"><ArrowUpRight size={17}/></span></Link>)}</div><div className="category-bottom"><span>Little surprises. Big memories.</span><Link to="/categories">See all 11 categories <ArrowRight size={15}/></Link></div></section>
 <section className="products-section" id="products"><div className="section-wrap"><div className="section-heading"><div><span className="eyebrow">THE LITTLE JOY EDIT</span><h2>{search?`Search results for “${search}”`:'Bestsellers & happy finds'}</h2><p>Customer favourites that are ready to make someone smile.</p></div><Link className="text-link" to="/categories">Shop every category <ArrowUpRight size={16}/></Link></div>{shown.length?<div className="product-grid">{shown.map(p=><ProductCard key={p.id} product={p} onAdd={onAdd} isWishlisted={wishlist.includes(p.id)} onWishlist={onWishlist} onQuickView={onQuickView}/>)}</div>:<div className="no-results">No gifts found for “{search}”. Try searching for lamp, bunny or panda.</div>}<div className="center-action"><Link to="/categories" className="outline-button">Explore all collections <ArrowRight size={17}/></Link></div></div></section>
 <ShopByOccasion/>
 <section className="gift-banner" id="gift-sets"><div className="gift-banner-art"><img src="/images/hero-banner.jpeg" alt="Colourful gifts and cute toys"/></div><div className="gift-banner-copy"><span className="eyebrow">FOR THE PEOPLE YOU LOVE</span><h2>Make the little<br/>moments <span>memorable.</span></h2><p>Birthday surprises, just-because treats, and thoughtful gifts that say what words sometimes can’t.</p><Link to="/category/gift-sets" className="primary-button">Explore gift sets <ArrowUpRight size={17}/></Link></div><span className="banner-sparkle sparkle-one">✳</span><span className="banner-sparkle sparkle-two">✦</span></section>
 <GiftBoxBuilder onAdd={onAdd}/>
 <Reviews/>
 <DeliveryEstimator/>
 <section className="community-section"><div className="community-copy"><span className="eyebrow">YOUR JOY, OUR INSPIRATION</span><h2>Little things.<br/><span>Lovely memories.</span></h2><p>Every gift has a story. We’re here for the birthdays, the thank-yous, the comfort gifts and the “saw this and thought of you” moments.</p><a href="#footer" className="text-link">A little about us <ArrowUpRight size={16}/></a></div><div className="community-photo"><img src="/images/hero-banner.jpeg" alt="A joyful collection of gifts and toys"/><div className="photo-caption"><span>✦</span><div><strong>Made for little moments</strong><small>Picked with care, sent with love</small></div></div></div></section>
 <section className="newsletter"><div className="newsletter-icon"><Mail/></div><span className="eyebrow">A LITTLE NOTE FROM US</span><h2>Good things, straight to your inbox.</h2><p>New arrivals, thoughtful gift ideas and a little extra joy. No clutter, promise.</p><form onSubmit={e=>{e.preventDefault();alert('Thank you for joining the S Square Elite list!')}}><input type="email" placeholder="Your email address" required/><button type="submit">Join the list <ArrowRight size={16}/></button></form><small><Check size={13}/> Just happy updates. Unsubscribe whenever.</small></section></main>
}
function Footer(){return <footer id="footer" className="footer"><div className="footer-main"><div className="footer-brand"><Link to="/" className="brand"><span className="brand-mark">🎁</span><span><b>S SQUARE</b><em>Elite</em><small>G I F T&nbsp; S H O P</small></span></Link><p>Little surprises for the people who make life lovely. Find something that makes them smile.</p><div className="social-links"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17}/></a><a href="mailto:hello@ssquareelite.com" aria-label="Email"><Mail size={17}/></a></div></div><div><h4>EXPLORE</h4><Link to="/categories">All categories</Link><a href="/#products">Bestsellers</a><a href="/#build-gift">Build a gift box</a><a href="/#reviews">Customer love</a></div><div><h4>HELP & CARE</h4><a href="mailto:hello@ssquareelite.com">Contact us</a><a href="mailto:hello@ssquareelite.com">Shipping information</a><a href="mailto:hello@ssquareelite.com">Returns & exchanges</a><a href="mailto:hello@ssquareelite.com">FAQs</a></div><div className="footer-promise"><span>🎀</span><h4>A LITTLE JOY, ALWAYS</h4><p>Thoughtful finds, safe checkout, and happy gifting from our little shop to your home.</p></div></div><div className="footer-bottom"><span>© 2026 S Square Elite. Made with ♡ for gift-givers.</span><span><PackageCheck size={15}/> Secure shopping · Thoughtful gifting</span></div></footer>}
export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [quickView, setQuickView] = useState(null);

  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
  };

  const removeCartItem = (indexToRemove) => {
    setCart((previousCart) =>
      previousCart.filter((_, index) => index !== indexToRemove)
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((previousWishlist) =>
      previousWishlist.includes(product.id)
        ? previousWishlist.filter((id) => id !== product.id)
        : [...previousWishlist, product.id]
    );
  };

  const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <>
      <Header
        cartCount={cart.length}
        onSearch={setSearch}
        onBagClick={() => setCartOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAdd={addToCart}
              search={search}
              wishlist={wishlist}
              onWishlist={toggleWishlist}
              onQuickView={setQuickView}
            />
          }
        />

        <Route
          path="/categories"
          element={
            <Categories
              onAdd={addToCart}
              wishlist={wishlist}
              onWishlist={toggleWishlist}
              onQuickView={setQuickView}
            />
          }
        />

        <Route
          path="/category/:slug"
          element={
            <CategoryDetail
              onAdd={addToCart}
              wishlist={wishlist}
              onWishlist={toggleWishlist}
              onQuickView={setQuickView}
            />
          }
        />

        <Route
          path="*"
          element={
            <main className="empty-state">
              <h1>That page wandered off.</h1>
              <Link to="/" className="primary-button">
                Back home
              </Link>
            </main>
          }
        />
      </Routes>

      <Footer />

      {wishlist.length > 0 && (
        <button
          className="wishlist-float"
          onClick={() =>
            alert(
              `You have ${wishlist.length} saved item${
                wishlist.length === 1 ? '' : 's'
              }. Tap the heart on a product to manage your wishlist.`
            )
          }
        >
          <Heart size={16} fill="currentColor" />
          Wishlist
          <b>{wishlist.length}</b>
        </button>
      )}

      <QuickViewModal
        product={quickView}
        onClose={() => setQuickView(null)}
        onAdd={addToCart}
      />

      {cartOpen && (
        <div
          className="cart-drawer-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setCartOpen(false);
            }
          }}
        >
          <aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Your shopping bag"
          >
            <div className="cart-drawer-header">
              <div>
                <span className="eyebrow">YOUR LITTLE FINDS</span>
                <h2>
                  Your bag <span>({cart.length})</span>
                </h2>
              </div>

              <button
                type="button"
                className="cart-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close shopping bag"
              >
                <X size={21} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <span className="cart-empty-icon">🛍️</span>
                <h3>Your bag is waiting for a little joy.</h3>
                <p>
                  You haven't added any gifts yet. Find something
                  lovely for someone special!
                </p>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setCartOpen(false)}
                >
                  Continue shopping <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((product, index) => (
                    <div
                      className="cart-item"
                      key={`${product.id}-${index}`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="cart-item-info">
                        <span>{product.category}</span>
                        <h3>{product.name}</h3>
                        <strong>
                          ₹{product.price.toLocaleString('en-IN')}
                        </strong>

                        <button
                          type="button"
                          className="cart-remove"
                          onClick={() => removeCartItem(index)}
                        >
                          <Trash2 size={13} />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-drawer-footer">
                  <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <strong>
                      ₹{cartTotal.toLocaleString('en-IN')}
                    </strong>
                  </div>

                  <p>
                    Delivery charges, if applicable, are calculated
                    separately.
                  </p>

                  <button
                    type="button"
                    className="primary-button cart-continue"
                    onClick={() => setCartOpen(false)}
                  >
                    Continue shopping <ArrowRight size={16} />
                  </button>

                  <button
                    type="button"
                    className="cart-clear"
                    onClick={() => setCart([])}
                  >
                    Clear bag
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}