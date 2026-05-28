export default function CheckoutSuccess() {
  return (
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center animate-fadeIn">
      {/* Success Icon */}
      <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-8 h-8 text-sage"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Message */}
      <h2 className="text-2xl font-display text-dark mb-4">
        ¡Gracias por tu compra!
      </h2>

      <p className="text-text mb-6">
        Tu pedido ha sido confirmado. Recibirás un correo de confirmación con los detalles de tu compra.
      </p>

      {/* Demo Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
        <p className="font-medium mb-1">Esta es una demo</p>
        <p>
          Este es un demostración del sitio web. Los pedidos no se procesarán realmente.
        </p>
      </div>
    </div>
  );
}
