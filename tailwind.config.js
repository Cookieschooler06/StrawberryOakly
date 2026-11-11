/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        berry: '#ff4d8d',
        plum: '#7c3aed',
        midnight: '#0f172a',
        neon: '#22d3ee',
        gold: '#fbbf24',
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 77, 141, 0.35)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(124,58,237,0.35), transparent 45%), radial-gradient(circle at bottom left, rgba(34,211,238,0.2), transparent 35%)',
      },
    },
  },
  plugins: [],
};
