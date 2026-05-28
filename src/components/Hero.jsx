export default function Hero({ onDiscoverClick }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80)',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/50 to-dark/30" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 text-left">
        <p className="text-xs font-display text-sage/80 uppercase tracking-widest mb-4 font-semibold">
          Lujo y Ciencia
        </p>

        <h2 className="text-6xl md:text-7xl font-display text-cream font-bold mb-8 leading-tight">
          Cosmética<br />
          para tu piel.
        </h2>

        <p className="text-lg text-cream/90 mb-12 leading-relaxed max-w-xl">
          Descubre los secretos de la belleza coreana. Cada producto ha sido seleccionado con la precisión de un ritual de lujo.
        </p>

        <button
          onClick={onDiscoverClick}
          className="inline-block bg-sage text-dark px-12 py-4 rounded-none font-semibold hover:bg-sage/90 transition-colors duration-300 text-base shadow-xl"
        >
          Descubre tu rutina
        </button>
      </div>
    </section>
  );
}
