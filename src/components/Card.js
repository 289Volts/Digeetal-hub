import React from "react";
import MyLink from "./MyLink";

const Card = ({ classes, title, description }) => {
	return (
		<div className="shadow-cardShadow bg-white text-center py-[2.1875rem] px-4 rounded-[20px]">
            <h3 className="text-black500 text-xl font-bold mb-3">{title}</h3>
			<p
				className="text-black400 text-sm mb-[1.4rem]"
			>{description}
			</p>
			<MyLink classes="text-primary500 font-bold text-sm flex justify-center gap-2" value="Read more" icon={true} />
		</div>
	);
};

export default Card;
