const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "968px",
    },
    colors: {
      "very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
      "soft-red": "hsl(14, 88%, 65%)",
      "soft-violet": "hsl(273, 75%, 66%)",
      "soft-blue": "hsl(240, 73%, 65%)",
      "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
      "dark-grayish-blue": "hsl(240, 6%, 50%)",
      "light-grayish-blue": "hsl(240, 5%, 91%)",
    },
    fontFamily: {
      sans: [
        'Kumbh Sans',
        ...defaultTheme.fontFamily.sans,
      ]
    },
    extend: {
      maxWidth: {
        "mobile-card": "327px",
        "desktop-card": "920px",
      },
    },
  },
  plugins: [],
}
