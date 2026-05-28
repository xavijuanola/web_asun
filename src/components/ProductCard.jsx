import { useState, useRef } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [ingredientOpen, setIngredientOpen] = useState(false);
  const cardRef = useRef(null);

  const handleAddClick = () => {
    onAddToCart(product, 1);
  };

  const pathname = window.location.pathname;
  const isAllbirds = pathname.includes('/allbirds/');
  const isLush = pathname.includes('/lush/');
  const isAway = pathname.includes('/away/');
  const isBando = pathname.includes('/bando/');
  const isRompedor = pathname.includes('/rompedor/');

  // Allbirds: Minimal, no borders, square
  if (isAllbirds) {
    return (
      <div className="product-card-allbirds overflow-hidden animate-slideUp">
        {/* Product Image - fills entire top */}
        <div className="bg-gray-200 h-56 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* Content - Minimal */}
        <div className="p-3">
          <h3 className="text-xs font-medium text-allbirds-dark mb-2 line-clamp-1 hover:underline cursor-pointer transition-all">
            {product.name}
          </h3>
          <span className="text-sm font-semibold text-allbirds-dark">€{product.price}</span>
        </div>
      </div>
    );
  }

  // Lush: Black card, bold neon
  if (isLush) {
    const categoryEmoji = {
      cleanser: '🧼',
      oil: '💧',
      toner: '✨',
      serum: '🌟',
      cream: '🧴',
      spf: '☀️',
    };

    const categoryName = {
      cleanser: 'Limpiador',
      oil: 'Aceite',
      toner: 'Tónico',
      serum: 'Suero',
      cream: 'Crema',
      spf: 'Protección',
    };

    return (
      <div className="bg-black border border-lush-pink overflow-hidden animate-slideUp">
        {/* Product Image */}
        <div className="bg-gray-900 h-64 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23333%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23666%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4 bg-black">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lush-pink font-bold text-lg">
              {categoryEmoji[product.category] || '🧴'} {categoryName[product.category] || 'Producto'}
            </span>
          </div>

          <h3 className="text-white font-bold text-sm mb-2 line-clamp-2">{product.name}</h3>

          <p className="text-xs text-gray-400 mb-4 line-clamp-1">{product.benefit}</p>

          <div className="flex items-center justify-between">
            <span className="text-lush-green font-bold text-lg">€{product.price}</span>
            <button
              onClick={handleAddClick}
              className="bg-lush-green text-black px-3 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Away: Editorial with large image, subtle border-bottom
  if (isAway) {
    return (
      <div className="product-card-away overflow-hidden animate-slideUp border-b border-gray-300 transition-all hover:shadow-lg">
        {/* Large Image */}
        <div className="bg-gray-200 h-96 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* Minimal text */}
        <div className="p-6">
          <h3 className="text-lg font-display font-bold text-dark mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{product.benefit}</p>
          <span className="text-xl font-semibold text-dark">€{product.price}</span>
        </div>
      </div>
    );
  }

  // Bando: Color-coded by category, emoji, rounded
  if (isBando) {
    const categoryColors = {
      cleanser: 'bg-bando-coral',
      oil: 'bg-bando-teal',
      toner: 'bg-bando-yellow',
      serum: 'bg-bando-purple',
      cream: 'bg-pink-400',
      spf: 'bg-orange-400',
    };

    const categoryEmoji = {
      cleanser: '🧼',
      oil: '💧',
      toner: '✨',
      serum: '🌟',
      cream: '🧴',
      spf: '☀️',
    };

    const categoryName = {
      cleanser: 'Limpiador',
      oil: 'Aceite',
      toner: 'Tónico',
      serum: 'Suero',
      cream: 'Crema',
      spf: 'Protección',
    };

    const bgColor = categoryColors[product.category] || 'bg-gray-400';

    return (
      <div className="overflow-hidden animate-slideUp rounded-2xl">
        {/* Category Badge */}
        <div className={`${bgColor} p-4 text-center`}>
          <div className="text-4xl mb-2">{categoryEmoji[product.category] || '🧴'}</div>
          <p className="text-white font-black text-sm">{categoryName[product.category] || 'Producto'}</p>
        </div>

        {/* Product Image */}
        <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm font-black text-dark mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.benefit}</p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-black text-dark">€{product.price}</span>
            <button
              onClick={handleAddClick}
              className={`${bgColor} text-white px-4 py-2 rounded-lg text-xs font-black hover:opacity-90 transition-opacity`}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Rompedor: 3D transform with ingredient slide
  if (isRompedor) {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotationX = (y / rect.height) * 10;
      const rotationY = -(x / rect.width) * 10;

      setRotation({ x: rotationX, y: rotationY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-96 perspective animate-slideUp"
        style={{
          perspective: '1000px',
        }}
      >
        <div
          className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-200"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(0)`,
            transformStyle: 'preserve-3d',
            boxShadow: `0 ${20 + Math.abs(rotation.x + rotation.y)}px ${40 + Math.abs(rotation.x + rotation.y)}px rgba(0,0,0,0.2)`,
          }}
        >
          {/* Product Image */}
          <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Content and Ingredients */}
          <div className="p-4 h-48 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="text-sm font-bold text-dark mb-1 line-clamp-2">{product.name}</h3>
              <p className="text-xs text-gray-600 mb-2 line-clamp-1">{product.benefit}</p>
              <span className="text-lg font-semibold text-dark">€{product.price}</span>
            </div>

            {/* Ingredient slide from bottom */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent p-4 text-white text-xs flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity"
              onClick={() => setIngredientOpen(!ingredientOpen)}
            >
              <div className="line-clamp-3 text-sm font-medium">Ingredientes principales:</div>
              <ul className="text-xs mt-2 space-y-1 line-clamp-2">
                <li>• Niacinamida</li>
                <li>• Ácido Hialurónico</li>
                <li>• Extractos K-beauty</li>
              </ul>
            </div>

            <button
              onClick={handleAddClick}
              className="bg-purple-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-purple-700 transition-colors w-full"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default Original style
  return (
    <div className="product-card border border-gray-200 rounded-lg overflow-hidden animate-slideUp">
      {/* Product Image */}
      <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-dark mb-1 line-clamp-2">{product.name}</h3>

        <p className="text-xs text-text mb-3 line-clamp-2">{product.benefit}</p>

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
