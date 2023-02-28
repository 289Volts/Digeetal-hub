import React, { Fragment } from "react";
import Header from "./Header";

const Layout = ({ children, className }) => {
	return (
		<Fragment>
			<Header className={className} />
			<main className={className}>{children}</main>
		</Fragment>
	);
};

export default Layout;
