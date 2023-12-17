/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#F2F5FF',
					100: '#EEF1FF',
					200: '#DEE4FF',
					300: '#CCD5FF',
					400: '#ADBCFF',
					500: '#5D79FE',
					600: '#2F56EF',
					700: '#2724EB',
					800: '#2222CC',
					900: '#1B37A5'
				}
			}
		}
	}
};
