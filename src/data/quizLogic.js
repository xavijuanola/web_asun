import { PRODUCTS } from './products';

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: '¿Cuál es tu tipo de piel?',
    type: 'single',
    options: [
      { value: 'oily', label: 'Piel grasa' },
      { value: 'dry', label: 'Piel seca' },
      { value: 'sensitive', label: 'Piel sensible' },
      { value: 'mature', label: 'Piel madura' },
    ],
  },
  {
    id: 2,
    question: '¿Cuál es tu principal preocupación de piel? (Opcional)',
    type: 'single',
    options: [
      { value: 'anti-aging', label: 'Arrugas y envejecimiento' },
      { value: 'hydration', label: 'Deshidratación' },
      { value: 'sensitivity', label: 'Sensibilidad e irritación' },
      { value: 'acne', label: 'Acné y poros' },
      { value: 'none', label: 'Sin preocupación específica' },
    ],
  },
  {
    id: 3,
    question: '¿Cuál es tu presupuesto mensual? (Opcional)',
    type: 'single',
    options: [
      { value: 'budget', label: 'Menos de €15' },
      { value: 'mid', label: 'Entre €15 y €30' },
      { value: 'premium', label: 'Más de €30' },
      { value: 'any', label: 'Presupuesto flexible' },
    ],
  },
];

export function getRecommendation(answers) {
  let recommendations = [...PRODUCTS];

  // Filter by skin type (mandatory)
  const skinType = answers[0];
  if (skinType) {
    recommendations = recommendations.filter((product) =>
      product.skinTypes.includes(skinType)
    );
  }

  // Apply concern boosting (optional)
  const concern = answers[1];
  if (concern && concern !== 'none') {
    const concernMap = {
      'anti-aging': ['mature', 'cream', 'serum'],
      'hydration': ['toner', 'serum', 'cream'],
      'sensitivity': ['cleanser', 'toner', 'serum'],
      'acne': ['cleanser', 'toner'],
    };

    const relevantCategories = concernMap[concern] || [];
    // Sort by relevance: items in relevant categories come first
    recommendations.sort((a, b) => {
      const aRelevant = relevantCategories.includes(a.category) ? 1 : 0;
      const bRelevant = relevantCategories.includes(b.category) ? 1 : 0;
      return bRelevant - aRelevant;
    });
  }

  // Apply budget filter (optional)
  const budget = answers[2];
  if (budget && budget !== 'any') {
    const budgetMap = {
      'budget': 15,
      'mid': 30,
      'premium': Infinity,
    };

    const maxPrice = budgetMap[budget];
    recommendations = recommendations.filter((product) => product.price <= maxPrice);
  }

  // Return top 7 recommendations
  return recommendations.slice(0, 7);
}
