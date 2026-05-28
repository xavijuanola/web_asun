export default function Hero({ onDiscoverClick }) {
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
