import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import Filters from './Filters';

export default function ProductGrid({ products = null, onAddToCart }) {
  const [filters, setFilters] = useState({ category: '', skinTypes: [] });

  // Use provided products or all products
  const displayProducts = products && products.length > 0 ? products : PRODUCTS;

  // Apply filters
  const filteredProducts = useMemo(() => {
    let result = displayProducts;

    // Filter by category
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    // Filter by skin types
    if (filters.skinTypes.length > 0) {
      result = result.filter((p) =>
        filters.skinTypes.some((skinType) => p.skinTypes.includes(skinType))
      );
    }

    return result;
  }, [displayProducts, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filters */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <Filters onFilterChange={handleFilterChange} />
        </div>

        {/* Product Count */}
        <p className="text-xs text-text/60 uppercase tracking-wide mb-8">
          Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text mb-6">
              No hay productos que coincidan con tus filtros.
            </p>
            <button
              onClick={() => setFilters({ category: '', skinTypes: [] })}
              className="text-dark hover:text-dark/70 font-semibold transition-colors text-sm"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
