/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '14': '14px', // Homepage Items
        '16': '16px', // Detail Page
      },
      fontWeight:{
        'thin': '300',
        'bold': '600',
        'heavy': '800',
      },
      colors:{
        'white' : 'hsl(0, 0%, 100%)', //(Dark Mode Text & Light Mode Elements),
        // ligthTheme
        'very-dark-gray': 'hsl(200, 15%, 8%)', //(Light Mode Text)
        'dark-gray' : 'hsl(0, 0%, 52%)', //(Light Mode Input)
        'very-light-gray': 'hsl(0, 0%, 98%)', //(Light Mode Background)
        // darkTheme
        'dark-blue': 'hsl(209, 23%, 22%)', //(Dark Mode Elements)
        'very-dark-blue' : 'hsl(207, 26%, 17%)', //(Dark Mode Background)
      }

    },
  },
  plugins: [],
}

