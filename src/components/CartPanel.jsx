export default function CartPanel({ cart, onCheckout, onClose }) {
  return (
    <>
      {/* Side Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl rounded-l-lg overflow-y-auto animate-slideInRight">
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display text-dark">Carrito</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-dark"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto mb-6">
            {cart.items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-text mb-4">Tu carrito está vacío</p>
                <button
                  onClick={onClose}
                  className="text-sage hover:underline font-medium"
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    {/* Product Name */}
                    <h3 className="font-medium text-dark text-sm mb-2 line-clamp-2">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <p className="text-text text-sm mb-3">
                      €{item.price} x {item.quantity} = €{(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mb-3">
                      <button
                        onClick={() =>
                          cart.updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          cart.updateQuantity(item.id, parseInt(e.target.value) || 0)
                        }
                        className="w-12 text-center border border-gray-300 rounded py-1 text-sm"
                        min="0"
                      />
                      <button
                        onClick={() =>
                          cart.updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => cart.removeItem(item.id)}
                      className="text-xs text-red-600 hover:text-red-700 font-medium"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary and Checkout */}
          {cart.items.length > 0 && (
            <>
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-text">Subtotal:</span>
                  <span className="text-xl font-semibold text-dark">
                    €{cart.subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-text mb-4">
                  Envío y impuestos calculados en el siguiente paso.
                </p>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-sage text-cream py-3 rounded-lg font-medium hover:bg-sage/90 transition-colors"
              >
                Proceder al pago
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
