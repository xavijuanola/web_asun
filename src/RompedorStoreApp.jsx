import { useState, useEffect } from 'react';
import { useCart } from './hooks/useCart';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import SkinTypeModal from './components/SkinTypeModal';
import QuizModal from './components/QuizModal';
import ProductGrid from './components/ProductGrid';
import KBeautyBlock from './components/KBeautyBlock';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import CheckoutSuccess from './components/CheckoutSuccess';

function RompedorStoreApp() {
  const cart = useCart();
  const [showSkinTypeModal, setShowSkinTypeModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [skinType, setSkinType] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [floatingNavExpanded, setFloatingNavExpanded] = useState(false);
  const [floatingNavTimeout, setFloatingNavTimeout] = useState(null);

  // Show skin type modal on mount if not already set
  useEffect(() => {
    const savedSkinType = localStorage.getItem('rompedor_skin_type');
    if (!savedSkinType) {
      setShowSkinTypeModal(true);
    } else {
      setSkinType(savedSkinType);
    }
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      // Auto-collapse floating nav after idle
      if (floatingNavTimeout) {
        clearTimeout(floatingNavTimeout);
      }
      setFloatingNavExpanded(true);

      const timeout = setTimeout(() => {
        setFloatingNavExpanded(false);
      }, 3000);
      setFloatingNavTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (floatingNavTimeout) clearTimeout(floatingNavTimeout);
    };
  }, [floatingNavTimeout]);

  const handleSkinTypeSelect = (type) => {
    setSkinType(type);
    setShowSkinTypeModal(false);
  };

  const handleQuizClick = () => {
    setShowQuiz(true);
  };

  const handleDiscoverClick = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = (result) => {
    setQuizResult(result);
    setShowQuiz(false);
  };

  const handleAddToCart = (product, quantity = 1) => {
    cart.addItem(product, quantity);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      cart.clearCart();
      setShowCheckout(false);
    }, 3000);
  };

  const handleCartClick = () => {
    cart.setIsOpen(true);
  };

  const getDisplayProducts = () => {
    if (quizResult && quizResult.products) {
      return quizResult.products;
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rompedor-purple to-rompedor-coral z-1000"
        style={{
          width: `${scrollProgress}%`,
          transition: 'width 0.1s linear',
        }}
      />

      {/* Fixed Header */}
      <Header onQuizClick={handleQuizClick} onCartClick={handleCartClick} cart={cart} />

      {/* Skin Type Modal */}
      {showSkinTypeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm" onClick={() => setShowSkinTypeModal(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <SkinTypeModal onComplete={handleSkinTypeSelect} onClose={() => setShowSkinTypeModal(false)} />
          </div>
        </div>
      )}

      {/* Quiz Modal Overlay */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center" onClick={() => setShowQuiz(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <QuizModal onComplete={handleQuizComplete} onClose={() => setShowQuiz(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onDiscoverClick={handleDiscoverClick} />

        {/* Product Grid Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-display text-dark mb-8 text-center">
            {quizResult ? 'Tus productos personalizados' : 'Todos nuestros productos'}
          </h2>
          <ProductGrid
            products={getDisplayProducts()}
            onAddToCart={handleAddToCart}
          />
        </section>

        {/* K-Beauty Block Section */}
        <KBeautyBlock />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Navigation Pill (Rompedor-specific) */}
      <nav
        className="rompedor-floating-nav"
        style={{
          backgroundColor: floatingNavExpanded ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.7)',
          padding: floatingNavExpanded ? '1rem 2rem' : '0.75rem 1.5rem',
          borderRadius: floatingNavExpanded ? '12px' : '50px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span className="text-white text-sm font-medium">{skinType || 'Productos'}</span>
        {floatingNavExpanded && (
          <div className="flex gap-2">
            <button className="text-white text-xs px-3 py-1 hover:bg-white/20 rounded-full transition-colors">
              Inicio
            </button>
            <button className="text-white text-xs px-3 py-1 hover:bg-white/20 rounded-full transition-colors">
              Productos
            </button>
          </div>
        )}
        <button
          onClick={handleCartClick}
          className="text-white text-lg hover:scale-110 transition-transform relative"
        >
          🛒
          {cart.items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-rompedor-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cart.items.length}
            </span>
          )}
        </button>
      </nav>

      {/* Cart Panel Overlay */}
      {cart.isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => cart.setIsOpen(false)} />
      )}
      {cart.isOpen && (
        <CartPanel
          cart={cart}
          onCheckout={handleCheckout}
          onClose={() => cart.setIsOpen(false)}
        />
      )}

      {/* Checkout Success Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <CheckoutSuccess />
        </div>
      )}
    </div>
  );
}

export default RompedorStoreApp;
