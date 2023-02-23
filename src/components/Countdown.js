import { useCountdown } from "@/context/CountdownContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import topBall from "../../public/assets/images/top-ball.svg";
import bottomBall from "../../public/assets/images/bottom-ball.svg";

const Countdown = () => {
	const { launch, setLaunch } = useCountdown();

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const target = new Date("3/17/2023 23:59:59");

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
		<div className="h-screen flex flex-col items-center justify-center bg-body text-white relative overflow-hidden">
			<div className="">
				<Image src={topBall} alt="" className="w-[45%] md:w-[20%] absolute z-[1] top-0 left-0" />
			</div>
			<div className="">
				<Image src={bottomBall} alt="" className="w-[45%] md:w-[20%] absolute z-[1] bottom-0 right-0" />
			</div>
			<div className="w-[90%] mx-auto text-center">
				<h1 className="text-[2.5rem] mb-[1.5rem] z-[1]">Launching Soon</h1>
				<div className="flex justify-between z-[1] md:w-[45%] mx-auto lg:w-[40%] xl:w-[30%]">
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center">
							<span className="text-[2rem]">{days}</span>
						</div>
						<span className="uppercase text-sm md:text-base">Days</span>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center">
							<span className="text-[2rem]">{hours}</span>
						</div>
						<span className="uppercase text-sm md:text-base">Hours</span>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center">
							<span className="text-[2rem]">{minutes}</span>
						</div>
						<span className="uppercase text-sm md:text-base">Minutes</span>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="backdrop-blur-[10px] bg-white/[0.2] p-4 w-full rounded-[3px] flex items-center justify-center">
							<span className="text-[2rem]">{seconds}</span>
						</div>
						<span className="uppercase text-sm md:text-base">Seconds</span>
					</div>
				</div>
				<p className="mt-[2rem]">We are working on bringing you excellent service</p>
			</div>
		</div>
	);
};

export default Countdown;
