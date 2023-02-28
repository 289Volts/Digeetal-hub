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

	const variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 2, ease: "easeInOut", staggerChildren: 0.4, when: "beforeChildren" },
		},
		hidden: { opacity: 0, y: "-100vh" },
	};

	const childVariants = {
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};

	const { pathname } = useRouter();
	return (
		<header className={`${className} relative bg-whiteText`}>
			<motion.div
				variants={variants}
				initial="hidden"
				animate={"visible"}
				className="desktop-nav hidden md:flex justify-between items-center py-4 w-[95%] mx-auto lg:w-[90%] xl:w-[80%]"
			>
				<div className="logo w-[17%] lg:w-auto">
					<Image src={desktopLogo} alt="logo" />
				</div>
				<nav className="">
					<motion.ul
						variants={childVariants}
						className="flex lg:grid grid-cols-[3.75rem_4.8rem_2.625rem_5.8rem_1fr] gap-7 lg:gap-[3rem] items-center"
					>
						<motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="">
							<Link className={`${pathname === "/" ? "text-primary500 font-bold" : ""}`} href="/">
								Home
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 1 }}
							className=""
						>
							<Link className={`${pathname === "/about" ? "text-primary500 font-bold" : ""}`} href="/about">
								About Us
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5, duration: 1 }}
							className=""
						>
							<Link className={`${pathname === "/about/#faqs" ? "text-primary500 font-bold" : ""}`} href="/about/#faqs">
								FAQs
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 1 }}
							className=""
						>
							<Link className={`${pathname === "/contact-us" ? "text-primary500 font-bold" : ""}`} href="/contact-us">
								Contact Us
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2.5, duration: 1 }}
							className=""
						>
							<Link className={`text-whiteText bg-primary500 font-semibold rounded-[10px] block py-3 px-5 h-full`} href="">
								Start a Project
							</Link>
						</motion.li>
					</motion.ul>
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
							<Link className={`text-whiteText bg-primary500 font-semibold rounded-[10px] block py-3 px-5 h-full`} href="">
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
