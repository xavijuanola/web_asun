import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      // Reset message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-sage/10 py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-dark mb-4">
          Recibe tips de belleza K-Beauty
        </h2>
        <p className="text-text mb-8">
          Suscríbete a nuestro boletín y recibe consejos exclusivos, recomendaciones personalizadas y ofertas especiales.
        </p>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
            <p className="font-medium">¡Gracias por suscribirte!</p>
            <p className="text-sm">Revisa tu email para confirmar la suscripción.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sage"
            />
            <button
              type="submit"
              className="bg-sage text-cream px-6 py-3 rounded-lg font-medium hover:bg-sage/90 transition-colors whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
