import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {

		extend: {

			colors: {
				primary: '#B3BCA7',
				secondary: '#F1C578',
				text: '#2C2E29', // Darker for better contrast
			},
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
				marcellus: ["var(--font-marcellus)"],
				'marcellus-sc': ["var(--font-marcellus-sc)"],
				playfair: ["var(--font-playfair)"],
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
}

module.exports = config;