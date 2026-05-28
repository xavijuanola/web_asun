import { useState } from 'react';
import { useCart } from './hooks/useCart';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import QuizModal from './components/QuizModal';
import ProductGrid from './components/ProductGrid';
import KBeautyBlock from './components/KBeautyBlock';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import CheckoutSuccess from './components/CheckoutSuccess';

function StoreApp() {
  const cart = useCart();
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  // Handle quiz button click from Header or Hero
  const handleQuizClick = () => {
    setShowQuiz(true);
  };

  // Handle discover button click from Hero
  const handleDiscoverClick = () => {
    setShowQuiz(true);
  };

  // Handle quiz completion
  const handleQuizComplete = (result) => {
    setQuizResult(result);
    setShowQuiz(false);
  };

  // Handle add to cart
  const handleAddToCart = (product, quantity = 1) => {
    cart.addItem(product, quantity);
  };

  // Handle checkout
  const handleCheckout = () => {
    setShowCheckout(true);
    // Clear cart after 3 seconds
    setTimeout(() => {
      cart.clearCart();
      setShowCheckout(false);
    }, 3000);
  };

  // Handle cart panel open
  const handleCartClick = () => {
    cart.setIsOpen(true);
  };

  // Get products for ProductGrid - either filtered by quiz result or all products
  const getDisplayProducts = () => {
    if (quizResult && quizResult.products) {
      return quizResult.products;
    }
    // This will be replaced with actual product data when available
    return [];
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Fixed Header */}
      <Header onQuizClick={handleQuizClick} onCartClick={handleCartClick} cart={cart} />

      {/* Quiz Modal Overlay */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center">
          <QuizModal onComplete={handleQuizComplete} onClose={() => setShowQuiz(false)} />
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

export default StoreApp;
