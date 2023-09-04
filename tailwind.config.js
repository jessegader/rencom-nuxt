export default {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  tailwindcss: {
    // cssPath: '~/assets/css/tailwind.css',
  },
  daisyui: {
    themes: ['light', 'dark', 'dracula'],
  },
}