import Image from "next/image";
import React from "react";
import MyLink from "./MyLink";
import heroImgMobile from "../../public/assets/images/hero-img-mobile.svg";
import heroImgMobiles from "../../public/assets/images/hero-img-mobile.png";
import woman from "../../public/assets/images/woman.jpg";

const Homepage = () => {
	return (
		<div>
			<section className="">
				<div className="w-[90%] mx-auto">
					<div className="">
						<Image src={woman} alt="" className="w-[300px]" />
						<div className="text-center space-y-2 mt-6">
							<h1 className="font-bold text-lg small:text-[1.25rem] leading-[1.26] normal:text-[1.7rem] md:text-[3rem]">
								Elevate Your Business with Custom Web Design & Development Solutions
							</h1>
							<p className="text-xs small:text-sm normal:text-base">
								Revolutionize Your Online Presence with Cutting-Edge Web Design and Development. Trust Our Expert Team
								to Deliver Results.
							</p>
						</div>
						<div className="mt-4">
							<MyLink
								value="Learn More"
								classes="text-whiteText bg-primary500 font-semibold rounded-[10px] block py-3 px-5 h-full w-[fit-content] mx-auto"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Homepage;
