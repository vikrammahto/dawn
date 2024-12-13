/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid', './src/**/*.js'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Avoid conflicts with Shopify's base styles
  },
  prefix: 'tw-', // Add 'tw-' prefix to all Tailwind classes
};
