import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { PRODUCT_CATEGORIES } from '../data/categories';
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

  // Group filtered products by category
  const groupedProducts = useMemo(() => {
    const grouped = {};
    PRODUCT_CATEGORIES.forEach((cat) => {
      grouped[cat.id] = filteredProducts.filter((p) => p.category === cat.id);
    });
    return grouped;
  }, [filteredProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filters */}
        <Filters onFilterChange={handleFilterChange} />

        {/* Products by Category */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-16">
            {PRODUCT_CATEGORIES.map((category) => {
              const categoryProducts = groupedProducts[category.id];
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category.id}>
                  {/* Category Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-display text-dark mb-2">
                      <span className="mr-3">{category.icon}</span>
                      {category.name}
                    </h3>
                    <p className="text-text max-w-3xl leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Category Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    ))}
                  </div>
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
