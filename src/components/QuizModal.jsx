import { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, getRecommendation } from '../data/quizLogic';
import { PRODUCTS } from '../data/products';

export default function QuizModal({ onComplete, onClose }) {
  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem('quizStep');
    return saved ? parseInt(saved) : 0;
  });
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem('quizAnswers');
    return saved ? JSON.parse(saved) : [null, null, null];
  });
  const [result, setResult] = useState(null);

  // Save to localStorage whenever step or answers change
  useEffect(() => {
    localStorage.setItem('quizStep', step.toString());
  }, [step]);

  useEffect(() => {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }, [answers]);

  const currentQuestion = QUIZ_QUESTIONS[step];
  const progress = ((step + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[step] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Quiz complete - get recommendations
      const recommendations = getRecommendation(answers);
      setResult({
        skinType: answers[0],
        concern: answers[1],
        budget: answers[2],
        products: recommendations,
      });
    }
  };

  const clearQuizState = () => {
    localStorage.removeItem('quizStep');
    localStorage.removeItem('quizAnswers');
  };

  const handleClose = () => {
    clearQuizState();
    onClose();
  };

  const handleComplete = (resultData) => {
    clearQuizState();
    onComplete(resultData);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const getSkinTypeLabel = (skinType) => {
    const typeMap = {
      'oily': 'Piel grasa',
      'dry': 'Piel seca',
      'sensitive': 'Piel sensible',
      'mature': 'Piel madura',
    };
    return typeMap[skinType] || skinType;
  };

  if (result) {
    // Result view
    return (
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display text-dark mb-2">
              ¡Perfecto!
            </h2>
            <p className="text-text">
              Basado en tu tipo de piel <span className="font-semibold">{getSkinTypeLabel(result.skinType)}</span>,
              te recomendamos estos productos:
            </p>
          </div>

          {/* Recommended Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
            {result.products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-40 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Imagen</span>
                </div>
                <h3 className="font-medium text-dark text-sm mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-text mb-2 line-clamp-2">
                  {product.benefit}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-dark">€{product.price}</span>
                  <span className="text-xs bg-sage/20 text-sage px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-200 text-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Seguir navegando
            </button>
            <button
              onClick={() => handleComplete(result)}
              className="flex-1 bg-sage text-cream px-6 py-3 rounded-lg font-medium hover:bg-sage/90 transition-colors"
            >
              Comprar rutina
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
      <div className="p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i < step || (i === step && answers[i])
                    ? 'bg-sage'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-text mt-2">
            Pregunta {step + 1} de {QUIZ_QUESTIONS.length}
          </p>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-display text-dark mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                answers[step] === option.value
                  ? 'border-sage bg-sage/10 text-dark'
                  : 'border-gray-200 text-text hover:border-sage/50'
              }`}
            >
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="flex-1 px-6 py-2 text-dark font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Atrás
          </button>
          <button
            onClick={handleNext}
            disabled={answers[step] === null}
            className="flex-1 px-6 py-2 bg-sage text-cream font-medium rounded-lg hover:bg-sage/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === QUIZ_QUESTIONS.length - 1 ? 'Ver resultados' : 'Siguiente'}
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-dark"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
