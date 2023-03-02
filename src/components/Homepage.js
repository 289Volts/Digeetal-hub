import Image from "next/image";
import React from "react";
import MyLink from "./MyLink";
import heroImgMobile from "../../public/assets/images/hero-img-mobile.svg";
import whoWeAre from "../../public/assets/images/who-we-are.svg";
import fair from "../../public/assets/images/fair.svg";
import workProcessSm from "../../public/assets/images/work-process-mobile.svg";
import Card from "./Card";
import Card2 from "./Card2";
import { services, whyUs, workProcess } from "../../data/data";
import { partners } from "../../data/partners";
import Partners from "./Partners";
import Testimonial from "./Testimonial";

const Homepage = () => {
	return (
		<div className="">
			<section className="pt-6 pb-[2.5rem]">
				<div className="w-[90%] mx-auto">
					<Image src={fair} alt="" className="w-full" />
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
			<section className="bg-primary50 py-[2.5rem]">
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
				<div className="w-[90%] mx-auto text-center">
					<div className="">
						<h2 className="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900">
							Explore Our Premium Digital Services
						</h2>
						<p className="text-black500 text-xs small:text-sm normal:text-base font-bold mt-2">
							We offer range of services to suite your business needs
						</p>
					</div>
					<div className="flex flex-col gap-8 mt-8">
						{services.map(({ id, title, description }) => (
							<Card key={id} title={title} description={description} />
						))}
					</div>
				</div>
			</section>
			<section className="py-[2.5rem] bg-primary50">
				<div className="w-[90%] mx-auto">
					<h2 className="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900 text-center">
						Learn About Our Work Process
					</h2>
					<Image src={workProcessSm} alt="" className="w-full mt-8" />
					<div className="mt-[2.5rem] space-y-8">
						{workProcess.map(({ id, title, description }) => (
							<Card2
								key={id}
								numberClass="text-primary500 font-bold text-xl normal:text-[2rem] mb-2"
								titleClass="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900"
								descriptionClass="text-black400 text-sm normal:text-base mt-[0.75rem]"
								number={id}
								title={title}
								description={description}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="py-[2.5rem]">
				<div className="w-[90%] mx-auto">
					<h2 className="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900 text-center">
						Why Choose Us
					</h2>
					<div className="mt-8 space-y-[2.5rem]">
						{whyUs.map(({ id, title, description, containerClass, image, alt }) => (
							<Card2
								key={id}
								containerClass="text-center"
								titleClass="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900 mt-6"
								descriptionClass="text-black400 text-sm normal:text-base mt-4"
								title={title}
								description={description}
								image={image}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="py-[2.5rem] bg-primary50">
				<div className="w-[90%] mx-auto text-center">
					<h2 className="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900">
						Our Partners
					</h2>
					<p className="text-black500 text-xs small:text-sm normal:text-base font-bold mt-2">
						We Collaborate with the world's Top Tech Companies
					</p>
					<div className="grid grid-cols-2 gap-y-8 gap-x-4 mt-8">
						{partners.map(({ id, image, title, alt }) => (
							<Partners key={id} image={image} title={title} alt={alt} />
						))}
					</div>
				</div>
			</section>
			<section className="py-[2.5rem]">
				<div className="">
					<h2 className="font-bold text-lg small:text-[1.25rem] normal:text-[1.5rem] md:text-[3rem] text-black900 text-center">
						What Our Clients Say About Us
					</h2>
					<div className="mt-8">
						<Testimonial />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Homepage;
