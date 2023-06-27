/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.js", "./src/**/*.vue", "./*.html", "./node_modules/flowbite/**/*.js"],
	theme: {
		fontFamily: {
			sans: ["SoleilRegular", "Arial", "sans-serif"],
			book: ["SoleiBook", "Arial", "sans-serif"],
			bold: ["SoleilBold", "Arial", "sans-serif"],
			light: ["SoleilLight", "Arial", "sans-serif"]
		},
		colors: {
			white: "#FFFFFF",
			black: "#020F2B",
			purple: "#B7BDFF",
			blue: "#4A59FF",
			darkblue: "#020746",
			darkgray: "#212121",
			green: "#38BDAE"
		},
		extend: {
			screens: {
				xs: "640px",
				sm: "768px",
				md: "1024px",
				lg: "1280px",
				xl: "1536px",
				xxl: "2560px"
			},
			fontSize: {
				tiny: [".938rem", "1rem"],
				xs: [".75rem", "1.2rem"],
				sm: [".875rem", "1.2rem"],
				base: ["1rem", "1.5rem"], //16px-24px
				md: ["1.625rem", "2.375rem"], //26px-38px
				lg: ["1.875rem", "2.75rem"], //30px-44px
				xl: ["2.625rem", "3.375rem"], //42px-54px
				xxl: ["3.875rem", "4.75rem"] //62px-76px
			}
		}
	},
	plugins: []
};
