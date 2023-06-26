/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fafafa',
      'brown': '#8A5A44',
      'amber' : '#d97706',
      'blue' : '#3b82f6',
      'bluetua' : '#1d4ed8',
      'gray' : '#374151',


    },
  },
  plugins: [],
}

