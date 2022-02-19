import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer({ heading, email }) {
	return (
		<footer className={styles.app_footer}>
			<h2>Contact</h2>

			<section className={styles.contact}>
				<p>{heading}</p>
				<Link href={`mailto:${email}`}>
					<a>{email}</a>
				</Link>
			</section>

			<section className={styles.back_to_top}>
				<button>
					<Link href="/">
						<a>Go to top</a>
					</Link>
				</button>
			</section>
		</footer>
	);
}
