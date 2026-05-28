export default function Hero({ onDiscoverClick }) {
  return (
    <section
      className="hero-section relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=800&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-7xl font-display text-cream font-bold mb-8 leading-tight drop-shadow-lg">
          Cosmética para tu piel,<br />
          no para la tendencia.
        </h2>

        <p className="text-xl md:text-2xl text-cream mb-10 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
          En Lyséa te ayudamos a descubrir los productos K-beauty perfectos para tu tipo de piel.
          Cada producto ha sido seleccionado cuidadosamente para ofrecerte resultados reales y seguros.
        </p>

        <button
          onClick={onDiscoverClick}
          className="inline-block bg-sage text-dark px-10 py-4 rounded-lg font-bold text-lg hover:bg-sage/85 transition-all transform hover:scale-105 shadow-2xl"
        >
          Descubre tu rutina
        </button>
      </div>
    </section>
  );
}
