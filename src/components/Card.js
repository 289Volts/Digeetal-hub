import React from "react";
import MyLink from "./MyLink";
import { motion as m } from "framer-motion";

const Card = ({ classes, title, description }) => {
	return (
		<m.div
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, threshold: 5 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			transition={{ duration: 0.8 }}
			className="shadow-cardShadow bg-white text-center py-[2.1875rem] px-5 rounded-[20px]"
		>
			<h3 className="text-black500 text-xl font-bold mb-3">{title}</h3>
			<p className="text-black400 text-sm normal:text-base mb-[1.4rem]">{description}</p>
			<MyLink classes="text-primary500 font-bold text-sm flex justify-center gap-2" value="Read more" icon={true} />
		</m.div>
	);
};

export default Card;
