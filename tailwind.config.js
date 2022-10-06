/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
				sm: '440px',
				// => @media (min-width: 440px) { ... }

				md: '547px',
				// => @media (min-width: 547px) { ... }

				lg: '820px',
				// => @media (min-width: 768px) { ... }

				xl: '1024px',
				// => @media (min-width: 1024px) { ... }

				'2xl': '1536px'
				// => @media (min-width: 1536px) { ... }
			},
    },
  },
  plugins: [],
}