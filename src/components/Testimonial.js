import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import jamari from "../../public/assets/images/jamari.svg";
import Marquee from "react-fast-marquee";

const Testimonial = ({ image, alt, comment }) => {
	return (
		<Marquee gradient={false} speed={100}>
			<div className="flex flex-col gap-6">
                <div className="w-full relative overflow-x-hidde">
                    <motion.div className="flex gap-6">
                        <div className="flex w-[550px] gap-4 items-center border-primary500 rounded-full border pr-[3.5rem] ml-6">
                            <Image src={jamari} alt={alt} />
                            <div className="flex flex-col gap-3">
                                <q className="text-black900 text-[13px]">
                                    I had a great experience working with Digeetal Hub. They were able to take my vision and turn it into a
                                    beautiful and functional mobile app that has helped my business grow. I highly recommend their services.
                                </q>
                                <div className="">
                                    <p className="text-black900 font-bold">Jamari McNabb</p>
                                    <p className="text-black500 text-[13px]">Founder, Noted Media Group</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[550px] gap-4 items-center border-primary500 rounded-full border pr-[3.5rem]">
                            <Image src={jamari} alt={alt} />
                            <div className="flex flex-col gap-3">
                                <q className="text-black900 text-[13px]">
                                    I had a great experience working with Digeetal Hub. They were able to take my vision and turn it into a
                                    beautiful and functional mobile app that has helped my business grow. I highly recommend their services.
                                </q>
                                <div className="">
                                    <p className="text-black900 font-bold">Jamari McNabb</p>
                                    <p className="text-black500 text-[13px]">Founder, Noted Media Group</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full relative overflow-x-hidde">
                    <motion.div className="flex gap-6">
                        <div className="flex w-[550px] gap-4 items-center border-primary500 rounded-full border pr-[3.5rem] ml-6">
                            <Image src={jamari} alt={alt} />
                            <div className="flex flex-col gap-3">
                                <q className="text-black900 text-[13px]">
                                    I had a great experience working with Digeetal Hub. They were able to take my vision and turn it into a
                                    beautiful and functional mobile app that has helped my business grow. I highly recommend their services.
                                </q>
                                <div className="">
                                    <p className="text-black900 font-bold">Jamari McNabb</p>
                                    <p className="text-black500 text-[13px]">Founder, Noted Media Group</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[550px] gap-4 items-center border-primary500 rounded-full border pr-[3.5rem]">
                            <Image src={jamari} alt={alt} />
                            <div className="flex flex-col gap-3">
                                <q className="text-black900 text-[13px]">
                                    I had a great experience working with Digeetal Hub. They were able to take my vision and turn it into a
                                    beautiful and functional mobile app that has helped my business grow. I highly recommend their services.
                                </q>
                                <div className="">
                                    <p className="text-black900 font-bold">Jamari McNabb</p>
                                    <p className="text-black500 text-[13px]">Founder, Noted Media Group</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
		</Marquee>
	);
};

export default Testimonial;
