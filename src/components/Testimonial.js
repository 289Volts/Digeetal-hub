import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import jamari from "../../public/assets/images/jamari.svg";
import Marquee from "react-fast-marquee";
import { firstRow, secondRow } from "data/testimonial";

const Testimonial = ({ image, alt, comment }) => {
	return (
		<div className="flex flex-col gap-6">
			<Marquee gradient={false} speed={80}>
				<motion.div className="flex gap-6">
					{firstRow.map(({ image, id, title, review, subtitle }) => (
						<div
							key={id}
							className=" flex w-[550px] gap-4 items-center border-primary500 rounded-full border pr-[3.5rem] ml-6"
						>
							<Image src={image} alt={alt} className="w-full" />
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
			<Marquee gradient={false} speed={80} direction="right" pauseOnHover={false}>
				<motion.div className="flex gap-6 translate-x-[-5rem] overflow-x-scroll">
					{secondRow.map(({ image, id, title, review, subtitle }) => (
						<div
							key={id}
							className=" flex w-[550px] gap-4 items-center border-primary500 rounded-full border pr-[3.5rem] ml-6"
						>
							<Image src={image} alt={alt} className="w-full" />
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
