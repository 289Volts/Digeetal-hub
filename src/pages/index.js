import Countdown from "@/components/Countdown";
import Homepage from "@/components/Homepage";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Digeetal Hub | Web Design and Development Agency in Lagos, Nigeria</title>
				<meta name="description" content="Digeetal Hub is a Lagos-based web design and development agency that specializes in creating beautiful, responsive, and user-friendly websites for businesses of all sizes. Contact us today to learn how we can help your business grow online." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Digeetal Hub" />
        <meta name="keywords" content="web design, web development, Lagos, Nigeria" />
				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			</Head>
			<main className="">
				<Countdown />
				{/* <Homepage /> */}
			</main>
		</>
	);
}
