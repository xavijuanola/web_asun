export default function KBeautyBlock() {
  const steps = [
    {
      number: 1,
      title: 'Limpiar',
      description: 'Elimina impurezas y residuos del día con nuestros limpiadoras suaves y efectivas.',
    },
    {
      number: 2,
      title: 'Tonificar',
      description: 'Prepara tu piel con tónicos que hidratan y equilibran el pH natural.',
    },
    {
      number: 3,
      title: 'Tratar',
      description: 'Aplica serums y ampollas concentradas para tus necesidades específicas.',
    },
    {
      number: 4,
      title: 'Proteger',
      description: 'Sella con cremas y protector solar para mantener los beneficios durante todo el día.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-dark mb-4">
            La rutina K-Beauty en 4 pasos
          </h2>
          <p className="text-text max-w-2xl mx-auto">
            Descubre el ritual coreano que ha transformado la piel de millones alrededor del mundo.
            Cada paso es esencial para una piel radiante y saludable.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg p-6 text-center">
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-sage">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display text-dark mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
