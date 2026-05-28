export default function ProductCard({ product, isFeatured, onAddToCart }) {
  const handleAddClick = () => {
    onAddToCart(product, 1);
  };

  return (
    <div className={`product-card overflow-hidden animate-slideUp relative group ${isFeatured ? 'featured-card' : ''}`}>
      {/* Product Image Container */}
      <div className={`bg-gray-200 flex items-center justify-center overflow-hidden relative ${isFeatured ? 'h-96' : 'h-64'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E'
          }}
        />

        {/* Premium Badge for Featured */}
        {isFeatured && (
          <div className="absolute top-6 right-6 bg-sage text-dark px-5 py-2 rounded-none font-bold text-xs shadow-xl uppercase tracking-wider">
            Edición Premium
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 bg-cream ${isFeatured ? 'h-80' : 'h-auto'} flex flex-col justify-between`}>
        <div>
          <h3 className={`font-display text-dark font-bold mb-3 line-clamp-2 ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
            {product.name}
          </h3>

          <p className={`text-text mb-6 line-clamp-3 ${isFeatured ? 'text-base' : 'text-sm'}`}>
            {product.benefit}
          </p>

          {/* Skin Type Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.skinTypes.map((skinType) => (
              <span
                key={skinType}
                className={`bg-taupe/40 text-dark px-3 py-1 rounded-full font-medium ${isFeatured ? 'text-sm' : 'text-xs'}`}
              >
                {skinType === 'oily' && 'Grasa'}
                {skinType === 'dry' && 'Seca'}
                {skinType === 'sensitive' && 'Sensible'}
                {skinType === 'mature' && 'Madura'}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-300">
          <span className={`font-bold text-dark ${isFeatured ? 'text-2xl' : 'text-xl'}`}>€{product.price}</span>
          <button
            onClick={handleAddClick}
            className={`bg-dark text-cream px-6 py-2 rounded-none font-bold hover:bg-dark/90 transition-all shadow-lg ${isFeatured ? 'text-base' : 'text-sm'} uppercase tracking-wide`}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
