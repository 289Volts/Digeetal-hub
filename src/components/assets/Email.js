import React from "react";

const Email = ({className,viewBox}) => {
	return (
		<svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
				fill="#FFFCFC"
			/>
		</svg>
	);
};

export default Email;