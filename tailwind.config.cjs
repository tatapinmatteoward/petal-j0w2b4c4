/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b2e83',
        accent: '#d8b4fe',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
