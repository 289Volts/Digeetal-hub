/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
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
