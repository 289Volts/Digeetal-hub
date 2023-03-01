/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "280px",
				small: "320px",
				normal: '375px',
				medium: "520px",
			},
			colors: {
				primary500: "#2385D5",
				primary50: "#E9F3FB",
				black50: "#EBEAEB",
				black400: "#5C5A62",
				black500: "#33313B",
				black900: "#151519",
				whiteText: "#FFFCFC",
			},
			backgroundImage: {
				timer: "linear-gradient(286deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)",
				body: "linear-gradient(68.5deg, #2E208E 16.57%, #9B56A6 100.9%)",
				topBall: "url('/assets/images/top-ball.svg')",
				bottomBall: "url('/assets/images/bottom-ball.svg')",
			},
		},
	},
	plugins: [],
};
