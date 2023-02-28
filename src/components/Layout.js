import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className }) => {
	return (
		<Fragment>
			<Header className={className} />
			<main className={className}>{children}</main>
			<Footer className={className} />
		</Fragment>
	);
};

export default Layout;
