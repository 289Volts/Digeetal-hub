import { useApp } from "@/context/appContext";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className }) => {
	const { pathname } = useRouter();
	const allowedPath = `${pathname} === "/contact-us" || ${pathname} === "/about" || ${pathname} === "/services" || ${pathname} === "/homepage"`;
const homePath = `${pathname} === "/"`
	return (
		<Fragment>
			{allowedPath && !homePath ? <Header className={className} /> : null}
			<main className={className}>{children}</main>
			{allowedPath && !homePath ? <Footer className={className} /> : null}
		</Fragment>
	);
};

export default Layout;
