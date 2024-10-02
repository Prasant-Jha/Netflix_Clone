/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Home.jsx",
  "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'my-image': "url('https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png')",
      }),
      colors: {
        'custom-gray': '#2e2e2e',
        'light-gray': '#1d2533',
      },
    },
  },
  plugins: [],
}

