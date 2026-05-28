export default function Hero({ onDiscoverClick }) {
  return (
    <section className="bg-gradient-to-b from-cream via-cream to-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-display text-dark font-bold mb-8 leading-tight tracking-tight">
          Cosmética para tu piel,<br />
          no para la tendencia.
        </h2>

        <p className="text-base text-text/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          En Lyséa te ayudamos a descubrir los productos K-beauty perfectos para tu tipo de piel.
          Cada producto ha sido seleccionado cuidadosamente para ofrecerte resultados reales y seguros.
        </p>

        <button
          onClick={onDiscoverClick}
          className="inline-block bg-dark text-cream px-10 py-3 rounded-md font-semibold hover:bg-dark/90 transition-colors duration-200"
        >
          Descubre tu rutina
        </button>
      </div>
    </section>
  );
}
