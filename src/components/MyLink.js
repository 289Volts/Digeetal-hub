import Link from "next/link";

const MyLink = ({ classes, value }) => {
	return (
		<Link className={classes} href="">
			{value}
		</Link>
	);
};

export default MyLink;
