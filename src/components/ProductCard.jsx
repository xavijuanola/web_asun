export default function ProductCard({ product, onAddToCart }) {
  const handleAddClick = () => {
    onAddToCart(product, 1);
  };

  return (
    <div className="product-card group rounded-md overflow-hidden animate-slideUp shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-95"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f3f4f6%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23d1d5db%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 bg-cream">
        <h3 className="text-sm font-display text-dark mb-2 line-clamp-2 font-semibold">
          {product.name}
        </h3>

        <p className="text-xs text-text mb-4 line-clamp-2 leading-relaxed">
          {product.benefit}
        </p>

        {/* Skin Type Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.skinTypes.map((skinType) => (
            <span
              key={skinType}
              className="text-xs font-medium text-dark bg-gray-200 px-2.5 py-1 rounded-full"
            >
              {skinType === 'oily' && 'Grasa'}
              {skinType === 'dry' && 'Seca'}
              {skinType === 'sensitive' && 'Sensible'}
              {skinType === 'mature' && 'Madura'}
            </span>
          ))}
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <span className="text-lg font-semibold text-dark">€{product.price}</span>
          <button
            onClick={handleAddClick}
            className="bg-dark text-cream px-4 py-2 rounded-md text-xs font-semibold hover:bg-dark/90 transition-colors duration-200"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
