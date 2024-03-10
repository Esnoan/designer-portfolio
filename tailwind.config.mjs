/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#07041F',
        gray: '#444444',
        'light-gray': '#F4F5F6',
        'lighter-gray': '#DFE5EB'
      },
      fontFamily: {
        xanh: ['Xanh Mono', 'monospace']
      }
    }
  },
  plugins: []
}
