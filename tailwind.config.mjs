const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			// add your default font below
			'sans': ['Font Name', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				// primary color used by the projet, easily swappable
				primary: colors.amber
			},
			container: {
				// default the container to center the content
				center: true,
				padding: {
					// add a default padding to the container
					DEFAULT: '1rem'
				}
			},
		},
	}
}
