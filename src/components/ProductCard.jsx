export default function ProductCard({ product, onAddToCart }) {
  const handleAddClick = () => {
    onAddToCart(product, 1);
  };

  return (
    <div className="product-card border border-gray-200 rounded-lg overflow-hidden animate-slideUp">
      {/* Image Placeholder */}
      <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
        <span className="text-gray-500 text-sm">Imagen del producto</span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-dark mb-1 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-text mb-3 line-clamp-2">
          {product.benefit}
        </p>

        {/* Skin Type Badges */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.skinTypes.map((skinType) => (
            <span
              key={skinType}
              className="text-xs bg-sage/20 text-sage px-2 py-1 rounded-full"
            >
              {skinType === 'oily' && 'Grasa'}
              {skinType === 'dry' && 'Seca'}
              {skinType === 'sensitive' && 'Sensible'}
              {skinType === 'mature' && 'Madura'}
            </span>
          ))}
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-dark">€{product.price}</span>
          <button
            onClick={handleAddClick}
            className="bg-sage text-cream px-3 py-2 rounded-lg text-xs font-medium hover:bg-sage/90 transition-colors"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
