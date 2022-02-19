import CustomImage from "../CustomImage";
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import ProjectLink from "../ProjectLink";

export default function Project({ heading, techStack, images, url }) {
	const ImageContainerRef = useRef(null);

	useEffect(() => {
		let isDown = false;
		let startX;
		let scrollLeft;

		ImageContainerRef.current.addEventListener("mousedown", (e) => {
			isDown = true;
			ImageContainerRef.current.classList.add("active");
			startX = e.pageX - ImageContainerRef.current.offsetLeft;
			scrollLeft = ImageContainerRef.current.scrollLeft;
		});

		ImageContainerRef.current.addEventListener("mouseleave", () => {
			isDown = false;
			ImageContainerRef.current.classList.remove("active");
		});

		ImageContainerRef.current.addEventListener("mouseup", () => {
			isDown = false;
			ImageContainerRef.current.classList.remove("active");
		});

		ImageContainerRef.current.addEventListener("mousemove", (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - ImageContainerRef.current.offsetLeft;
			const SCROLL_SPEED = 3;
			const walk = (x - startX) * SCROLL_SPEED;
			ImageContainerRef.current.scrollLeft = scrollLeft - walk;
		});
	}, []);

	return (
		<section className={styles.project}>
			<section className={styles.header}>
				<ProjectLink {...{ url, heading }} />

				<section className={styles.tech_stack}>
					<p>Technologies</p>

					<section className={styles.stack}>
						{techStack.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</section>
				</section>
			</section>

			<section className={styles.images}>
				<ul className={styles.container} ref={ImageContainerRef}>
					{images.map((item, i) => (
						<li key={i}>
							<CustomImage
								src={item}
								alt={heading}
								style={styles.image}
								layout="fill"
								objectFit="cover"
								placeholder="blur"
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer("100%", "100%")
								)}`}
							/>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#34353E" offset="20%" />
      <stop stop-color="#22222E" offset="50%" />
      <stop stop-color="#34353E" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#34353E" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);
