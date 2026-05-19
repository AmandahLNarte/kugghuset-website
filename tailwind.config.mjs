/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-dark':  '#0E1530',
        'navy-deep':  '#1A2046',
        navy:         '#2C3464',
        pink:         '#E5B8CB',
        'pink-deep':  '#D49AB4',
        powder:       '#B5CCE0',
        'powder-deep':'#7FA6C9',
        glow:         '#5BA8E0',
        cream:        '#F6F2EA',
        paper:        '#EDE7DA',
        ink:          '#11163A',
        fg:           '#F0EFFA',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Hanken Grotesk"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
