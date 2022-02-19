import Setup from "@/containers/Setup.jsx";
import Head from "next/head";
import "../styles/globals.scss";
import data from "../data";

function MyApp({ Component, pageProps }) {
	return (
		<Setup>
			<Head>
				<title>{`${data.name}'s Portfolio`}</title>
				<meta name="viewport" content="width=device-width" />
				<meta property="og:locale" content="en_IN" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Component {...pageProps} />
		</Setup>
	);
}

export default MyApp;
