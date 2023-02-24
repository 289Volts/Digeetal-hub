import { useCountdown } from "@/context/CountdownContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import topBall from "../../public/assets/images/top-ball.svg";
import bottomBall from "../../public/assets/images/bottom-ball.svg";

const Countdown = () => {
	const { setLaunch } = useCountdown();

	const [days, setDays] = useState("");
	const [hours, setHours] = useState(null);
	const [minutes, setMinutes] = useState(null);
	const [seconds, setSeconds] = useState(null);

	useEffect(() => {
		const target = new Date("3/24/2023 23:59:59");

		const interval = setInterval(() => {
			const now = new Date();
			const difference = target.getTime() - now.getTime();

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			setHours(h);

			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);

			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);

			if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
				setLaunch(true);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="h-[100dvh] flex flex-col items-center justify-center bg-body text-white relative w-full">
			<div className="overflow-hidden">
				<Image src={topBall} alt="" priority className="w-[45%] md:w-[20%] absolute z-[1] top-0 left-0" />
			</div>
			<div className="overflow-hidden">
				<Image src={bottomBall} alt="" priority className="w-[45%] md:w-[20%] absolute z-[1] bottom-0 right-0" />
			</div>
			<div className="w-[90%] mx-auto text-center relative z-10">
				<h1 className="text-[2.5rem] mb-[1.5rem] z-[1] lg:text-[3.5rem]">Launching Soon!!</h1>
				<div className="grid grid-cols-4 gap-4 md:gap-5 lg:gap-6 z-[1] sm:w-[53%] mx-auto lg:w-[55%] xl:w-[40%]">
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center h-[90px] lg:h-[120px]">
							<span className="text-[2rem] lg:text-[3rem]">{days}</span>
						</div>
						<span className="uppercase text-sm md:text-base lg:text-[1.5rem]">Days</span>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center h-[90px] lg:h-[120px]">
							<span className="text-[2rem] lg:text-[3rem]">{hours}</span>
						</div>
						<span className="uppercase text-sm md:text-base lg:text-[1.5rem]">Hours</span>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center h-[90px] lg:h-[120px]">
							<span className="text-[2rem] lg:text-[3rem]">{minutes}</span>
						</div>
						<span className="uppercase text-sm md:text-base lg:text-[1.5rem]">Minutes</span>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center h-[90px] lg:h-[120px]">
							<span className="text-[2rem] lg:text-[3rem]">{seconds}</span>
						</div>
						<span className="uppercase text-sm md:text-base lg:text-[1.5rem]">Seconds</span>
					</div>
				</div>
				<p className="mt-[3rem] md:text-[1.2rem] lg:text-[1.4rem] relative z-10">
					We are working towards bringing you excellent service
				</p>
			</div>
		</div>
	);
};

export default Countdown;
