import Image from "next/image";
import React from "react";
import MyLink from "./MyLink";
import heroImgMobile from "../../public/assets/images/hero-img-mobile.svg";
import whoWeAre from "../../public/assets/images/who-we-are.svg";
import fair from "../../public/assets/images/fair.png";
import Card from "./Card";
import cardData from "../../data";

const Homepage = () => {
	return (
		<div className=" overflow-hidden">
			<section className="pt-6 pb-[2.5rem]">
				<div className="w-[90%] mx-auto">
					<Image src={fair} alt="" className="" />
					<div className="">
						<div className="text-center space-y-2 mt-6">
							<h1 className="font-bold text-black900 text-lg small:text-[1.25rem] leading-[1.26] normal:text-[1.7rem] md:text-[3rem]">
								Elevate Your Business with Custom Web Design & Development Solutions
							</h1>
							<p className="text-xs small:text-sm normal:text-base text-black500">
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
			<section className="bg-primary50 py-8">
				<div className="w-[90%] mx-auto">
					<Image src={whoWeAre} alt="" />
					<div className="space-y-2 mt-8">
						<h2 className="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900">
							Who We Are
						</h2>
						<p className="text-black400 text-xs small:text-sm leading-[1.4] normal:text-base">
							Welcome to Digeetal Hub, where we specialize in web design and development solutions to help businesses
							stand out online. Our team of experts offers custom web design, e-commerce solutions, responsive design,
							and SEO optimization, social media management, among other services. We take the time to understand our
							clients' unique needs and work closely with them throughout the design and development process. Our goal
							is to deliver top-quality work on time and within budget, while providing exceptional customer service.
							Let us help you achieve your business goals today.
						</p>
					</div>
					<MyLink
						value="See More"
						classes="text-whiteText bg-primary500 font-semibold rounded-[10px] block py-3 px-5 h-full w-[fit-content] mt-4"
					/>
				</div>
			</section>
			<section className="py-[2.5rem] overflow-hidden">
				<div className="w-[90%] mx-auto">
					<div className="">
						<h2 className="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900 text-center">
							Explore Our Premium Digital Services
						</h2>
						<p className="text-black500 text-xs small:text-sm normal:text-base text-center font-bold mt-2">
							We offer range of services to suite your business needs
						</p>
					</div>
          <div className="flex flex-col gap-8 mt-8">
            {cardData.map(({id, title, description}) => (
              <Card key={id} title={title} description={description}/>
            ))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Homepage;
