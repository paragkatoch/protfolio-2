import Link from "next/link";
import CustomImage from "../CustomImage";
import styles from "./styles.module.scss";
import ArrowImage from "./arrow-up-right.svg";

export default function ProjectLink({ url, heading }) {
	return (
		<>
			<Link href={url}>
				<a target="_blank" className={styles.project_info}>
					<section className={styles.title}>
						<p>{heading}</p>

						<CustomImage
							style={styles.arrowImage}
							src={ArrowImage}
							alt="arrow"
						/>
					</section>
				</a>
			</Link>
		</>
	);
}
