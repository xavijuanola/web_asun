import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';

export default function Header({ onQuizClick, onCartClick, cart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Search filter: top 5 results by name/benefit match
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.benefit.toLowerCase().includes(query)
    ).slice(0, 5);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowResults(false), 200);
  };

  const handleResultClick = (product) => {
    setSearchQuery('');
    setShowResults(false);
    // Could navigate to product or add to cart here
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-cream border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-display text-dark font-semibold">Lyséa</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 max-w-md relative">
          <input
            type="text"
            placeholder="Busca un producto..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery && setShowResults(true)}
            onBlur={handleSearchBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sage"
          />

          {/* Dropdown Results */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
              {searchResults.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleResultClick(product)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 border-b last:border-b-0 transition-colors"
                >
                  <p className="text-sm font-medium text-dark">{product.name}</p>
                  <p className="text-xs text-text">{product.benefit}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Quiz Link */}
          <button
            onClick={onQuizClick}
            className="text-sm font-medium text-dark hover:text-sage transition-colors"
          >
            Quiz de piel
          </button>

          {/* Cart Icon with Badge */}
          <button
            onClick={onCartClick}
            className="relative text-dark hover:text-sage transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            {/* Badge */}
            {cart.itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-sage text-cream text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
