import Image from "next/image";

const Partners = ({ image, title, alt }) => {
	return (
		<div className="px-[1.5rem] py-[1.25rem] flex justify-center items-center shadow-cardShadow mx-auto w-full bg-white flex-col gap-3">
			<Image src={image} alt={alt} />
			<p className="text-base normal:text-xl font-bold">{title}</p>
		</div>
	);
};

export default Partners;
