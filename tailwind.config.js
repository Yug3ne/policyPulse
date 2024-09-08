/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pRegular: ['PoppinsRegular'],
        pItalic: ['PoppinsItalic'],
        pMedium: ['PoppinsMedium'],
        pSemiBold: ['PoppinsSemiBold'],
        pBold: ['PoppinsBold'],
      },
      colors:{
        rBlue: '#002366',
        lGray: "#E2E2E2",
        bTeal: '#008080',
        coral: '#FF5A1F',
        dGray: '#292929'
      }
    },
  },
  plugins: [],
}