import { useState } from 'react';

export const CATEGORIES = [
  { value: 'cleanser', label: 'Limpiadoras' },
  { value: 'oil', label: 'Aceites' },
  { value: 'toner', label: 'Tónicos' },
  { value: 'serum', label: 'Serums' },
  { value: 'cream', label: 'Cremas' },
  { value: 'spf', label: 'Protección Solar' },
];

export const SKIN_TYPES = [
  { value: 'oily', label: 'Piel grasa' },
  { value: 'dry', label: 'Piel seca' },
  { value: 'sensitive', label: 'Piel sensible' },
  { value: 'mature', label: 'Piel madura' },
];

export default function Filters({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    onFilterChange({ category, skinTypes: selectedSkinTypes });
  };

  const handleSkinTypeToggle = (skinType) => {
    const updated = selectedSkinTypes.includes(skinType)
      ? selectedSkinTypes.filter((s) => s !== skinType)
      : [...selectedSkinTypes, skinType];

    setSelectedSkinTypes(updated);
    onFilterChange({ category: selectedCategory, skinTypes: updated });
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category Filter */}
        <div>
          <h3 className="font-medium text-dark mb-3 text-sm">Categoría</h3>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sage"
          >
            <option value="">Todas las categorías</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Skin Type Filter */}
        <div>
          <h3 className="font-medium text-dark mb-3 text-sm">Tipo de piel</h3>
          <div className="space-y-2">
            {SKIN_TYPES.map((skinType) => (
              <label
                key={skinType.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedSkinTypes.includes(skinType.value)}
                  onChange={() => handleSkinTypeToggle(skinType.value)}
                  className="w-4 h-4 text-sage rounded border-gray-300 focus:ring-sage"
                />
                <span className="ml-2 text-sm text-text">{skinType.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
