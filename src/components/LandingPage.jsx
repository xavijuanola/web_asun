export default function LandingPage() {
  const variants = [
    {
      name: 'Original',
      description: 'Clean, balanced design with professional aesthetic',
      url: '/web_asun/',
      color: 'bg-sage',
    },
    {
      name: 'Thrive',
      description: 'Masonry layout with featured products and visual hierarchy',
      url: '/web_asun/thrive/',
      color: 'bg-taupe',
    },
    {
      name: 'Glossier',
      description: 'Minimalist clean aesthetic with subtle elegance',
      url: '/web_asun/glossier/',
      color: 'bg-dark',
    },
    {
      name: 'Dior',
      description: 'Editorial premium aesthetic with luxury styling',
      url: '/web_asun/dior/',
      color: 'bg-amber-900',
    },
    {
      name: 'Allbirds',
      description: 'Minimal, nature-forward. Square edges, clean typography, no borders',
      url: '/web_asun/allbirds/',
      color: 'bg-yellow-700',
    },
    {
      name: 'Lush',
      description: 'Bold black with vivid neon pops. Playful, dynamic, fearless',
      url: '/web_asun/lush/',
      color: 'bg-black',
    },
    {
      name: 'Away',
      description: 'Editorial luxury. Massive typography, full-viewport imagery, pure white',
      url: '/web_asun/away/',
      color: 'bg-gray-800',
    },
    {
      name: 'Bando',
      description: 'Playful, colorful gradients. Retro typography, rounded shapes, fun',
      url: '/web_asun/bando/',
      color: 'bg-gradient-to-br from-pink-400 to-purple-600',
    },
    {
      name: 'Rompedor',
      description: '🚀 El producto te encuentra a ti. 3D, parallax, navegación flotante, sin búsqueda',
      url: '/web_asun/rompedor/',
      color: 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-dark text-cream py-8 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-display font-bold">Lyséa</h1>
          <p className="text-sm text-cream/70 mt-2">Explora nuestras diferentes propuestas de diseño</p>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-dark mb-4">
            Elige tu experiencia Lyséa
          </h2>
          <p className="text-lg text-text max-w-3xl mx-auto">
            Explora nueve interpretaciones diferentes del universo de belleza coreana.
            Cada versión ofrece una perspectiva única sobre diseño, navegación y experiencia del usuario.
            Desde lo clásico hasta lo rompedor, encuentra tu estilo.
          </p>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((variant, idx) => (
            <a
              key={idx}
              href={variant.url}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className={`${variant.color} h-64 rounded-lg flex flex-col items-center justify-center text-white p-6 shadow-lg group-hover:shadow-2xl transition-shadow relative overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/40 transition-all" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-display font-bold mb-3">
                    {variant.name}
                  </h3>
                  <p className="text-sm mb-6 text-white/90 leading-relaxed">
                    {variant.description}
                  </p>
                  <button className="bg-white text-dark px-6 py-2 rounded-md font-semibold text-sm hover:bg-white/90 transition-colors">
                    Ver diseño
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-cream/70 py-12 mt-20 border-t border-cream/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Lyséa — Cosmética para tu piel, no para la tendencia
          </p>
        </div>
      </footer>
    </div>
  );
}
