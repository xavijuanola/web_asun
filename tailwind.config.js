export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f5f0',
        sage: '#a8d5c4',
        taupe: '#d4c5b0',
        dark: '#2d3436',
        text: '#555',
        // Allbirds
        'allbirds-offwhite': '#f8f6f0',
        'allbirds-tan': '#c8b89a',
        'allbirds-dark': '#1a1a1a',
        'allbirds-green': '#6b8f71',
        // Lush
        'lush-black': '#000',
        'lush-pink': '#ff1f8f',
        'lush-green': '#39ff14',
        'lush-white': '#fff',
        // Away
        'away-white': '#fff',
        'away-black': '#000',
        'away-sage': '#a8d5c4',
        // Bando
        'bando-coral': '#ff6b6b',
        'bando-yellow': '#ffd93d',
        'bando-teal': '#6bcb77',
        'bando-purple': '#c77dff',
        // Rompedor
        'rompedor-purple': '#c77dff',
        'rompedor-coral': '#ff6b6b',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      animation: {
        slideInRight: 'slideInRight 0.4s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
