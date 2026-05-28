export default function ProductCard({ product, onAddToCart }) {
  const handleAddClick = () => {
    onAddToCart(product, 1);
  };

  return (
    <div className="product-card border border-gray-200 rounded-lg overflow-hidden animate-slideUp">
      {/* Product Image */}
      <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E'
          }}
        />
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
