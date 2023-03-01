import Image from "next/image";

const Card2 = ({containerClass, numberClass, titleClass, descriptionClass, number, title, description, image, alt }) => {
	return (
		<div className={containerClass}>
            <p className={numberClass}>{number}</p>
            {image && <div className="px-[1.6875rem] py-[1.125rem] flex justify-center items-center shadow-cardShadow mx-auto w-[fit-content]">
                <Image src={image} alt={alt} />
            </div>}
			<h2 className={titleClass}>
				{title}
			</h2>
			<p className={descriptionClass}>{description}
			</p>
		</div>
	);
};

export default Card2;
