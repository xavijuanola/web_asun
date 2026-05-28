export default function Hero({ onDiscoverClick }) {
  const pathname = window.location.pathname;
  const isAllbirds = pathname.includes('/allbirds/');
  const isLush = pathname.includes('/lush/');
  const isAway = pathname.includes('/away/');
  const isBando = pathname.includes('/bando/');
  const isRompedor = pathname.includes('/rompedor/');

  // Allbirds: Clean split layout
  if (isAllbirds) {
    return (
      <section className="bg-allbirds-offwhite min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-12 px-8">
          {/* Left side: Headline */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-display text-allbirds-dark font-bold leading-tight mb-8">
              Cosmética para tu piel, no para la tendencia.
            </h2>
            <button
              onClick={onDiscoverClick}
              className="w-fit bg-allbirds-tan text-allbirds-dark px-8 py-4 rounded-none font-medium hover:opacity-90 transition-opacity"
            >
              Descubre tu rutina
            </button>
          </div>

          {/* Right side: Product image */}
          <div className="flex items-center justify-center">
            <div className="bg-allbirds-tan h-96 w-full rounded-none flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop"
                alt="K-beauty product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Lush: Black full-screen with animated gradient text
  if (isLush) {
    return (
      <section className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-24">
        <div className="text-center max-w-2xl">
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-lush-pink via-lush-green to-white bg-clip-text text-transparent animate-gradient">
            Cosmética para tu piel
          </h2>
          <p className="text-white text-xl md:text-2xl leading-relaxed mb-12">
            No para la tendencia. Descubre tu rutina K-beauty perfecta.
          </p>
          <button
            onClick={onDiscoverClick}
            className="bg-lush-green text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity text-lg"
          >
            Descubre tu rutina
          </button>
        </div>
      </section>
    );
  }

  // Away: Editorial with large image background
  if (isAway) {
    return (
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=800&fit=crop)',
            opacity: 0.4,
          }}
        />

        {/* Content overlay */}
        <div className="relative h-screen flex items-center pl-8 md:pl-16 max-w-6xl">
          <div>
            <h2 className="text-8xl md:text-9xl font-display font-bold text-white leading-none mb-8" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
              Cosmética para tu piel
            </h2>
            <p className="text-xl text-white max-w-xl" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
              No para la tendencia.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Bando: Playful colored blocks
  if (isBando) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
        <div className="max-w-5xl w-full">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-bando-coral h-32 rounded-2xl" />
            <div className="bg-bando-yellow h-32 rounded-2xl" />
            <div className="bg-bando-teal h-32 rounded-2xl" />
          </div>

          <h2 className="text-7xl font-display font-black mb-8 leading-tight">
            <span className="text-bando-coral">Cosmética</span> para tu piel,{' '}
            <span className="text-bando-yellow">no para</span> la{' '}
            <span className="text-bando-purple">tendencia.</span>
          </h2>

          <button
            onClick={onDiscoverClick}
            className="bg-bando-coral text-white px-8 py-4 rounded-2xl font-black text-lg hover:opacity-90 transition-opacity"
          >
            Descubre tu rutina
          </button>
        </div>
      </section>
    );
  }

  // Rompedor: Parallax base hero
  if (isRompedor) {
    return (
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
        {/* Background layer (slowest) */}
        <div
          className="absolute inset-0 bg-gray-100"
          style={{
            transform: 'translateY(0px)',
            willChange: 'transform',
          }}
        />

        {/* Middle layer (medium speed) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: 'translateY(0px)',
            willChange: 'transform',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop"
            alt="Product"
            className="w-64 h-64 object-cover rounded-2xl opacity-50"
          />
        </div>

        {/* Foreground text (fastest) */}
        <div
          className="relative z-10 text-center px-4"
          style={{
            transform: 'translateY(0px)',
            willChange: 'transform',
          }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-dark mb-4 leading-tight">
            Cosmética para tu piel
          </h2>
          <p className="text-lg text-dark mb-8 max-w-xl mx-auto">
            No para la tendencia. Descubre tu rutina K-beauty.
          </p>
          <button
            onClick={onDiscoverClick}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
          >
            Descubre tu rutina
          </button>
        </div>
      </section>
    );
  }

  // Default Original style
  return (
    <section className="bg-gradient-to-b from-cream to-sage/10 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-dark font-bold mb-6 leading-tight">
          Cosmética para tu piel,<br />
          no para la tendencia.
        </h2>

        <p className="text-lg text-text mb-8 leading-relaxed">
          En Lyséa te ayudamos a descubrir los productos K-beauty perfectos para tu tipo de piel.
          Cada producto ha sido seleccionado cuidadosamente para ofrecerte resultados reales y seguros.
        </p>

        <button
          onClick={onDiscoverClick}
          className="inline-block bg-sage text-cream px-8 py-3 rounded-lg font-medium hover:bg-sage/90 transition-colors shadow-md"
        >
          Descubre tu rutina
        </button>
      </div>
    </section>
  );
}
