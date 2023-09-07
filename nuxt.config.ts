export default {
  nitro: {
    preset: 'vercel-edge',
  },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "~/src/assets/css/main.css",
  ],
  build: {
    transpile: ["primevue"]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
