import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import desktopLogo from "../../public/assets/images/desktop-header-logo.svg";
import mobileLogo from "../../public/assets/images/mobile-header-logo.svg";
import { useRouter } from "next/router";
import { motion, useCycle } from "framer-motion";
import Hamburger from "./Hamburger";

const Header = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const { pathname } = useRouter();
	return (
		<header className={`${className} relative bg-whiteText`}>
            <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: "0" }}
                transition={{ duration: 1.8 }}
                className="desktop-nav hidden md:flex justify-between items-center py-4 w-[95%] mx-auto lg:w-[80%]">
				<div className="logo w-[17%] lg:w-auto">
					<Image src={desktopLogo} alt="logo" />
                </div>
				<nav className="">
					<ul className="flex items-center gap-8 text-center justify-center h-full lg:gap-[3rem]">
						<l1 className="">
							<Link className={`${pathname === "/" ? "text-primary500 font-bold" : ""}`} href="">
								Home
							</Link>
						</l1>
						<l1 className="">
							<Link className={`${pathname === "/about" ? "text-primary500 font-bold" : ""}`} href="">
								About Us
							</Link>
						</l1>
						<l1 className="">
							<Link className={`${pathname === "/#faqs" ? "text-primary500 font-bold" : ""}`} href="">
								FAQs
							</Link>
						</l1>
						<l1 className="">
							<Link className={`${pathname === "/contact" ? "text-primary500 font-bold" : ""}`} href="">
								Contact Us
							</Link>
						</l1>
						<l1 className="">
							<Link className={`text-whiteText bg-primary500 font-bold rounded-[10px] block py-3 px-5 h-full`} href="">
								Start a Project
							</Link>
						</l1>
					</ul>
				</nav>
			</motion.div>
			<div className="mobile-nav py-4 w-[90%] mx-auto flex justify-between items-center md:hidden">
				<div className="logo">
					<Image src={mobileLogo} alt="logo" />
				</div>

				<Hamburger isOpen={isOpen} onClick={toggleNav} />

				<motion.nav
					initial={{ y: "-100vh" }}
					animate={{ y: isOpen ? "0" : "-100vh" }}
					transition={{ duration: 0.6 }}
					className="bg-primary50 absolute top-0 left-0 right-0 w-full h-[53vh] pt-9 small:w-[60%] small:ml-auto"
				>
					<ul className="flex flex-col items-center gap-8 text-center justify-center h-full">
						<l1 className="">
							<Link className={`${pathname === "/" ? "text-primary500 font-bold" : ""}`} href="">
								Home
							</Link>
						</l1>
						<l1 className="">
							<Link className={`${pathname === "/about" ? "text-primary500 font-bold" : ""}`} href="">
								About Us
							</Link>
						</l1>
						<l1 className="">
							<Link className={`${pathname === "/#faqs" ? "text-primary500 font-bold" : ""}`} href="">
								FAQs
							</Link>
						</l1>
						<l1 className="">
							<Link className={`${pathname === "/contact" ? "text-primary500 font-bold" : ""}`} href="">
								Contact Us
							</Link>
						</l1>
						<l1 className="">
							<Link className={`text-primary50 bg-primary500 font-bold rounded-[10px] block py-3 px-5 h-full`} href="">
								Start a Project
							</Link>
						</l1>
					</ul>
				</motion.nav>
			</div>
		</header>
	);
};

export default Header;
