import React, { Fragment } from "react";

const Layout = ({ children, className }) => {
	return (
		<Fragment>
			<main className={className}>{children}</main>
		</Fragment>
	);
};

export default Layout;
