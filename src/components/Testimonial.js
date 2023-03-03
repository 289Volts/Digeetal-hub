import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import jamari from "../../public/assets/images/jamari.svg";
import Marquee from "react-fast-marquee";
import { firstRow, secondRow } from "data/testimonial";

const Testimonial = ({ image, alt, comment }) => {
	return (
		<div className="flex flex-col gap-5 w-[200%]">
			<Marquee gradient={false} direction="right" speed={80}  pauseOnHover={true}>
				<motion.div className="flex gap-4">
					{firstRow.map(({ image, id, title, review, subtitle }) => (
						<div
							key={id}
							className=" flex w-[600px] gap-6 items-center border-primary500 rounded-full border pr-[3.5rem] first:ml-6"
						>
							<Image src={image} alt={title} className="w-full" />
							<div className="flex flex-col gap-3">
								<q className="text-black900 text-[13px]">{review}</q>
								<div className="">
									<p className="text-black900 font-bold">{title}</p>
									<p className="text-black500 text-[13px]">{subtitle}</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</Marquee>
			<Marquee gradient={false} speed={70} direction="right" pauseOnHover={true}>
				<motion.div className="flex gap-5 translate-x-[-5rem]">
					{secondRow.map(({ image, id, title, review, subtitle }) => (
						<div
							key={id}
							className=" flex w-[550px] gap-6 items-center border-primary500 rounded-full border pr-[3.5rem] first:ml-6"
						>
							<Image src={image} alt={title} className="w-full" />
							<div className="flex flex-col gap-3">
								<q className="text-black900 text-[13px]">{review}</q>
								<div className="">
									<p className="text-black900 font-bold">{title}</p>
									<p className="text-black500 text-[13px]">{subtitle}</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</Marquee>
		</div>
	);
};

export default Testimonial;
