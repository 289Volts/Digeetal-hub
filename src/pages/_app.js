import Layout from "@/components/Layout";
import CountDownContext from "@/context/CountdownContext";
import "@/styles/globals.css";
import { DM_Sans } from "@next/font/google";
import { Fragment } from "react";

const dm = DM_Sans({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<Layout className={dm.className}>
				<CountDownContext>
					<Component {...pageProps} />
				</CountDownContext>
			</Layout>
		</Fragment>
	);
}
