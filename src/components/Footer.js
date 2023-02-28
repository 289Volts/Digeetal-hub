import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../../public/assets/images/mobile-footer-logo.svg";
import Location from "./assets/Location";

const Footer = ({ className }) => {
	return (
		<footer className={`${className} bg-primary500 w-full text-whiteText pt-[2.5rem]`}>
			<div className="w-[90%] mx-auto">
				<div className="space-y-6">
					<Image src={footerLogo} className="" alt="footer logo" />
					<p className="text-xs w-[65%] font-bold">
						We're a team of young, professional and creative experts. Our goal is to deliver top-quality work on time
						and within budget, while providing exceptional customer service.
					</p>
				</div>
				<div className="mt-6 mb-4">
					<h2 className="text-xl mb-4 font-bold">Services</h2>
					<nav className="text-black50">
						<ul className="flex flex-col gap-3 text-xs font-bold">
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
						<ul className="flex flex-col gap-3 text-xs font-bold">
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
				<div className="">
					<h2 className="text-xl mb-4 font-bold">Contact</h2>
					<div className="text-black50 text-xs space-y-3">
                        <div className="flex gap-3 font-bold">
                            <Location width="24" height="24" viewBox="0 0 24 24" />
                            <span className="">Lagos, Nigeria</span>
                        </div>
                        <div className="flex gap-3 font-bold">
                            <Location width="24" height="24" viewBox="0 0 24 24" />
                            <span className="">info@digeetalhub.com</span>
                        </div>
                        <div className="flex gap-3 font-bold">
                            <Location width="24" height="24" viewBox="0 0 24 24" />
                            <span className="">+2349035937893</span>
                        </div>
                    </div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
