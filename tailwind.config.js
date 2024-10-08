/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        othin: ['Outfit-Thin', 'sans-serif'],
        oextralight: ['Outfit-ExtraLight', 'sans-serif'],
        olight: ['Outfit-Light', 'sans-serif'],
        oregular: ['Outfit-Regular', 'sans-serif'],
        omedium: ['Outfit-Medium', 'sans-serif'],
        osemibold: ['Outfit-SemiBold', 'sans-serif'],
        obold: ['Outfit-Bold', 'sans-serif'],
        oextrabold: ['Outfit-ExtraBold', 'sans-serif'],
        oblack: ['Outfit-Black', 'sans-serif'],
      },
      colors: {
        originblue: '#23ACE3',
        redalert: '#FC366B',
      }
    },
  },
  plugins: [],
};
