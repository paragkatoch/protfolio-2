import Link from "next/link";
import styles from "./styles.module.scss";

export default function Hero({ name, description, socialUrl }) {
	// const urls = socialUrl.slice(0, 3);
	return (
		<section className={styles.hero}>
			<section className={styles.user}>
				<h1 id={styles.name}>{name}</h1>
			</section>

			<section className={styles.info}>
				<section className={styles.description}>
					{description.map((item, i) => (
						<p key={i}>{item}</p>
					))}
				</section>

				<section className={styles.social}>
					{socialUrl.map((item, i) => (
						<Link href={item.url} key={i}>
							<a>{item.name}</a>
						</Link>
					))}
				</section>
			</section>
		</section>
	);
}
