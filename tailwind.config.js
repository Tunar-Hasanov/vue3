import scrollbarHide from 'tailwind-scrollbar-hide'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Arkaplan görüntüleri
      backgroundImage: {
        homeImage: "url('../assets/img/iron-texture-1.jpg')",
        aboutHeader: "url('../assets/img/logo.jpg')",
        aboutLeft: "url('../assets/img/iron-texture-3.jpg')",
        aboutMessage: "url('../assets/img/iron-texture-3.jpg')",
      },
      // Renkler
      colors: {
        primary: '#FF5733',
        second: '#fff',
        thirty: '#d9d9d9',
        danger: 'crimson',
        success: 'green',
      },
    },
  },
  plugins: [scrollbarHide],
}
