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
		<header className={`${className} relative`}>
			<div className="desktop-nav hidden">
				<div className="logo">
					<Image src={desktopLogo} alt="logo" />
				</div>
			</div>
			<div className="mobile-nav py-4 w-[90%] mx-auto flex justify-between items-center">
				<div className="logo">
					<Image src={mobileLogo} alt="logo" />
				</div>

				<button aria-expanded={`${isOpen ? "true" : "false"}`} className="toggle z-10" onClick={toggleNav}>
					<Hamburger isOpen={isOpen} />
				</button>
				<motion.nav
					initial={{ y: "-100vh" }}
					animate={{ y: isOpen ? "0" : "-100vh" }}
					transition={{ duration: 0.7 }}
					className="bg-primary50 absolute top-0 left-0 right-0 w-full h-[53vh] pt-9"
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
