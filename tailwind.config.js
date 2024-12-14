/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid', './src/**/*.js'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Avoid conflicts with Shopify's base styles
  },
};
