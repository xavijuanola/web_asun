import { useState, useEffect } from 'react';

export default function SkinTypeModal({ onComplete, onClose }) {
  const [selected, setSelected] = useState(null);

  const skinTypes = [
    { emoji: '😊', label: 'Saludable', value: 'healthy' },
    { emoji: '😐', label: 'Mixta', value: 'mixed' },
    { emoji: '😔', label: 'Problemática', value: 'problematic' },
  ];

  useEffect(() => {
    // Load from localStorage
    const savedType = localStorage.getItem('rompedor_skin_type');
    if (savedType) {
      setSelected(savedType);
    }
  }, []);

  const handleSelect = (type) => {
    setSelected(type);
    localStorage.setItem('rompedor_skin_type', type);
    setTimeout(() => {
      onComplete(type);
    }, 300);
  };

  return (
    <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl animate-slideUp">
      <h2 className="text-3xl font-display font-bold text-center mb-6 text-dark">
        ¿Cómo está tu piel hoy?
      </h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {skinTypes.map((skin) => (
          <button
            key={skin.value}
            onClick={() => handleSelect(skin.value)}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
              selected === skin.value
                ? 'bg-purple-600 text-white scale-105'
                : 'bg-gray-100 text-dark hover:bg-gray-200'
            }`}
          >
            <span className="text-4xl">{skin.emoji}</span>
            <span className="text-xs font-medium text-center">{skin.label}</span>
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-gray-600">
        Personalizaremos tu rutina según tu respuesta.
      </p>

      {selected && (
        <button
          onClick={() => onComplete(selected)}
          className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors"
        >
          Continuar
        </button>
      )}

      <button
        onClick={onClose}
        className="w-full mt-2 text-gray-600 py-2 rounded-xl text-sm hover:text-dark transition-colors"
      >
        Omitir
      </button>
    </div>
  );
}
