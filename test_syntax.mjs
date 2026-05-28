import products from './src/data/products.js' assert { type: 'json' };
import { TESTIMONIALS } from './src/data/testimonials.js';
import { QUIZ_QUESTIONS, getRecommendation } from './src/data/quizLogic.js';

// Since products.js uses export const, we need to read it as JS

console.log('Testing imports...');
console.log('Testimonials count:', Array.isArray(TESTIMONIALS) ? TESTIMONIALS.length : 'NOT ARRAY');
console.log('Quiz questions count:', Array.isArray(QUIZ_QUESTIONS) ? QUIZ_QUESTIONS.length : 'NOT ARRAY');
console.log('getRecommendation type:', typeof getRecommendation);
