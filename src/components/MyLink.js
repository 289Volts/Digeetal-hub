import Image from "next/image";
import Link from "next/link";
import rightArr from "../../public/assets/icons/right-arr.svg";

const MyLink = ({ classes, value, dest, icon }) => {
	return (
		<Link className={classes} href={`${dest}`}>
			{value}<span> {icon && <Image src={rightArr} alt="" className="inline translate-y-[-1px]" />}</span>
		</Link>
	);
};

export default MyLink;
