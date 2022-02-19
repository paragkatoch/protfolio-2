import ProjectLink from "../ProjectLink";
import styles from "./styles.module.scss";

export default function Experiments({ name = "Experiments", contents = [] }) {
	return (
		<section className={styles.experiments}>
			<h2>{name}</h2>

			<div className={styles.container}>
				{contents.map((item, i) => (
					<ProjectLink key={i} {...item} />
				))}
			</div>
		</section>
	);
}
