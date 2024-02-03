/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/helper/**/*.rb',
		'./app/javascript/**/*.js',
		'./app/views/**/*.html.erb',
	],
	theme: {
		extend: {},
	},
	plugins: ['@tailwindcss/forms', '@tailwindcss/typography'],
};
