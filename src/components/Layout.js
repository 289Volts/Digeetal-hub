import { useApp } from "@/context/appContext";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState, useLayoutEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className }) => {
	const { pathname } = useRouter();

	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		if (pathname != "/") {
			setIsHome(!isHome);
		}
	}, [pathname]);

	// const allowedPath = `${pathname} === "/contact-us" || ${pathname} === "/about" || ${pathname} === "/services" || ${pathname} === "/homepage"`;
	// const homePath = `${pathname} === "/"`;
	return (
		<Fragment>
			{!isHome ? <Header className={className} /> : null}
			<main className={`${className}`}>{children}</main>
			{!isHome ? <Footer className={className} /> : null}
		</Fragment>
	);
};

export default Layout;
