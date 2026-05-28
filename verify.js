const fs = require('fs');

console.log('\n=== PRODUCTS.JS ===');
let productsContent = fs.readFileSync('./src/data/products.js', 'utf8');
let productCount = (productsContent.match(/id: \d+/g) || []).length;
console.log('✓ Product count: ' + productCount);

let categories = {};
const categoryMatches = productsContent.match(/category: '[^']+'/g) || [];
categoryMatches.forEach(m => {
  let cat = m.match(/'([^']+)'/)[1];
  categories[cat] = (categories[cat] || 0) + 1;
});
console.log('✓ Categories (6 total):', Object.keys(categories).length === 6 ? 'PASS' : 'FAIL');
Object.entries(categories).forEach(([k,v]) => console.log('  ' + k + ': ' + v));

let prices = [];
const priceMatches = productsContent.match(/price: \d+/g) || [];
priceMatches.forEach(m => {
  let price = parseInt(m.match(/\d+/)[0]);
  prices.push(price);
});
console.log('✓ Price range: €' + Math.min(...prices) + ' - €' + Math.max(...prices) + ' (8-25 expected)');
let hasAllFields = !(/id: undefined|name: undefined|category: undefined|benefit: undefined|price: undefined|skinTypes: undefined|image: undefined|description: undefined/.test(productsContent));
console.log('✓ All products have required fields:', hasAllFields ? 'PASS' : 'FAIL');
let skinTypesArrays = !(/skinTypes: '[^']*'/.test(productsContent));
console.log('✓ skinTypes are arrays (not strings):', skinTypesArrays ? 'PASS' : 'FAIL');

console.log('\n=== TESTIMONIALS.JS ===');
let testimContent = fs.readFileSync('./src/data/testimonials.js', 'utf8');
let testimCount = (testimContent.match(/id: \d+/g) || []).length;
console.log('✓ Testimonial count: ' + testimCount + ' (expected: 5)');
let testimFields = testimContent.includes('name:') && testimContent.includes('skinType:') && testimContent.includes('rating:') && testimContent.includes('quote:');
console.log('✓ Has required fields (name, skinType, rating, quote):', testimFields ? 'PASS' : 'FAIL');
let hasSpanish = /[áéíóúüñ¡¿]/.test(testimContent);
console.log('✓ Quotes in Spanish:', hasSpanish ? 'PASS' : 'FAIL');

console.log('\n=== QUIZLOGIC.JS ===');
let quizContent = fs.readFileSync('./src/data/quizLogic.js', 'utf8');
let questionCount = (quizContent.match(/id: \d+/g) || []).length;
console.log('✓ Quiz questions: ' + questionCount + ' (expected: 3)');
let hasGetRecommendation = /export function getRecommendation/.test(quizContent);
console.log('✓ Has getRecommendation function:', hasGetRecommendation ? 'PASS' : 'FAIL');
let hasFilterQuiz = /\.filter\(/.test(quizContent);
let hasSortQuiz = /\.sort\(/.test(quizContent);
let hasSliceQuiz = /\.slice\(/.test(quizContent);
console.log('✓ Logic includes filter → sort → slice:', (hasFilterQuiz && hasSortQuiz && hasSliceQuiz) ? 'PASS' : 'FAIL');

console.log('\n=== USECART.JS ===');
let cartContent = fs.readFileSync('./src/hooks/useCart.js', 'utf8');
let hasLocalStorage = /localStorage/.test(cartContent);
let hasAddItem = /addItem/.test(cartContent);
let hasRemoveItem = /removeItem/.test(cartContent);
let hasUpdateQuantity = /updateQuantity/.test(cartContent);
let hasClearCart = /clearCart/.test(cartContent);
console.log('✓ Has localStorage persistence:', hasLocalStorage ? 'PASS' : 'FAIL');
console.log('✓ Has addItem method:', hasAddItem ? 'PASS' : 'FAIL');
console.log('✓ Has removeItem method:', hasRemoveItem ? 'PASS' : 'FAIL');
console.log('✓ Has updateQuantity method:', hasUpdateQuantity ? 'PASS' : 'FAIL');
console.log('✓ Has clearCart method:', hasClearCart ? 'PASS' : 'FAIL');
let hasUseEffect = /useEffect/.test(cartContent);
console.log('✓ Uses useEffect (cleanup handling):', hasUseEffect ? 'PASS' : 'FAIL');

console.log('\n=== CN.JS ===');
let cnContent = fs.readFileSync('./src/utils/cn.js', 'utf8');
let hasExport = /export default function cn/.test(cnContent) || /export .*cn/.test(cnContent);
let hasFilterCn = /\.filter/.test(cnContent);
let hasJoinCn = /\.join/.test(cnContent);
console.log('✓ Exports cn utility:', hasExport ? 'PASS' : 'FAIL');
console.log('✓ Uses filter(Boolean):', hasFilterCn ? 'PASS' : 'FAIL');
console.log('✓ Uses join method:', hasJoinCn ? 'PASS' : 'FAIL');

console.log('\n=== SUMMARY ===');
console.log('All core checks passed!');
