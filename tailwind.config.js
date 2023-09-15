/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
	  extend: {
		  colors: {
			  "custom-black": "#1C1B1B",
			  "custom-blue": "#2F80ED",
			  "custom-white": "#F3F3F3",
		  }
	  },
  },
  plugins: [],
}

