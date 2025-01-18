import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
				serif: ["Instrument-Serif", ...defaultTheme.fontFamily.serif],
			},
			colors: {

				bgColor: "#FFFFFF",      // Pure white
				primary: "#006D77",      // Ocean teal
				title: "#2C3E50",        // Deep blue-gray
				body: "#5D6D7E",         // Medium blue-gray
				hoverColor: "#E3F6F8",   // Light cyan hover
			
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss", require("@tailwindcss/typography")],
};
