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

  // Determine which products are featured (5th and 7th)
  const isFeatured = (index) => {
    return index === 4 || index === 6; // 0-based indexing
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filters */}
        <Filters onFilterChange={handleFilterChange} />

        {/* Product Count */}
        <p className="text-sm text-text mb-8">
          Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
        </p>

        {/* Products Masonry Grid */}
        {filteredProducts.length > 0 ? (
          <div className="masonry-grid">
            {filteredProducts.map((product, index) => {
              const featured = isFeatured(index);
              return (
                <div
                  key={product.id}
                  className={`masonry-item ${featured ? 'masonry-large' : ''}`}
                >
                  <ProductCard
                    product={product}
                    isFeatured={featured}
                    onAddToCart={onAddToCart}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text mb-4">
              No hay productos que coincidan con tus filtros.
            </p>
            <button
              onClick={() => setFilters({ category: '', skinTypes: [] })}
              className="text-sage hover:underline font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
