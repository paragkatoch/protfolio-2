import Hero from "@/components/Hero";
import styles from "../styles/Home.module.scss";

import data from "../data";
import Project from "@/components/Project";
import Experiments from "@/components/Experiments";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
	const { name, description, socialUrl, projects, experiments, contact } = data;

	return (
		<>
			<Head>
				<meta name="description" content={description.join(" ")} />
				<meta property="og:title" content={`${name}'s Portfolio`} />
				<meta property="og:description" content={description.join(" ")} />
				<meta property="twitter:title" content={`${name}'s Portfolio`} />
				<meta property="twitter:description" content={description.join(" ")} />
			</Head>

			<div className={styles.app}>
				<Hero {...{ name, description, socialUrl }} />

				{projects.map((item, i) => (
					<Project key={i} {...item} />
				))}

				<Experiments {...experiments} />
				<Footer {...contact} />
			</div>
		</>
	);
}
