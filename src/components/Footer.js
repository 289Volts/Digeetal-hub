import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../../public/assets/images/mobile-footer-logo.svg";
import Copyright from "./assets/Copyright";
import Email from "./assets/Email";
import Instagram from "./assets/Instagram";
import LinkedIn from "./assets/LinkedIn";
import Location from "./assets/Location";
import Phone from "./assets/Phone";
import Twitter from "./assets/Twitter";

const Footer = ({ className }) => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={`${className} bg-primary500 w-full text-whiteText pt-[2.5rem] pb-4`}>
			<div className="w-[90%] mx-auto">
				<div className="space-y-6">
					<Image src={footerLogo} className="" alt="footer logo" />
					<p className="xs:text-xs small:text-sm xs:w-[95%] small:w-[65%] font-bold">
						We're a team of young, professional and creative experts. Our goal is to deliver top-quality work on time
						and within budget, while providing exceptional customer service.
					</p>
				</div>
				<div className="mt-6 mb-4">
					<h2 className="text-xl mb-4 font-bold">Services</h2>
					<nav className="text-black50">
						<ul className="flex flex-col gap-3 xs:text-xs small:text-sm font-bold">
							<li className="">
								<Link href="" className="">
									Web & Mobile App Development
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									UI/UX Design
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Content Writing
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Social Media Management
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Graphic Design
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Copywriting
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="mt-6 mb-4">
					<h2 className="text-xl mb-4 font-bold">Quick Links</h2>
					<nav className="text-black50">
						<ul className="flex flex-col gap-3 xs:text-xs small:text-sm font-bold">
							<li className="">
								<Link href="" className="">
									Web & Mobile App Development
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									UI/UX Design
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Content Writing
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Social Media Management
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Graphic Design
								</Link>
							</li>
							<li className="">
								<Link href="" className="">
									Copywriting
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="mb-4">
					<h2 className="text-xl mb-4 font-bold">Contact</h2>
					<div className="text-black50 xs:text-xs small:text-sm space-y-3">
						<Link href="" className="flex items-center gap-3 font-bold">
							<Location className="w-[19px] md:w-[24px] aspect-square" viewBox="0 0 24 24" />
							<span className="">Lagos, Nigeria</span>
						</Link>
						<Link href="" className="flex items-center gap-3 font-bold">
							<Email className="w-[19px] md:w-[24px] aspect-square" viewBox="0 0 24 24" />
							<span className="">info@digeetalhub.com</span>
						</Link>
						<Link href="" className="flex items-center gap-3 font-bold">
							<Phone className="w-[19px] md:w-[24px] aspect-square" viewBox="0 0 24 24" />
							<span className="">+2349035937893</span>
						</Link>
					</div>
				</div>
				<div className="">
					<h2 className="small:text-sm xs:text-xs mb-2 font-medium">Follow us on:</h2>
					<div className="flex gap-2">
						<Link href="" className="">
							<Instagram className="w-[28px] md:w-[24px] aspect-square" viewBox="0 0 24 24" />
						</Link>
						<Link href="" className="">
							<Twitter className="w-[28px] md:w-[24px] aspect-square" viewBox="0 0 24 24" />
						</Link>
						<Link href="" className="">
							<LinkedIn className="w-[28px] md:w-[24px] aspect-square" viewBox="0 0 24 24" />
						</Link>
					</div>
				</div>
			</div>
			<div className="border-t-2 border-t-whiteText mt-4">
				<p className="text-xs xs:text-xs mt-4 flex justify-center text-black50 items-center text-center">
					Copyright &copy; {currentYear} Digeetal Hub. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
