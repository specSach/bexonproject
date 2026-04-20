"use client";

import Link from "next/link";

const FeatureCard = ({ feature, type, idx }) => {
	const { icon, title, desc, isStropa, image, hoverImage } = feature ? feature : {};

	const updateCursorPosition = (event) => {
		if (!isStropa) return;
		const mediaElement = event.currentTarget;
		const rect = mediaElement.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		mediaElement.style.setProperty("--stropa-x", `${x}px`);
		mediaElement.style.setProperty("--stropa-y", `${y}px`);
	};

	const resetCursorPosition = (event) => {
		if (!isStropa) return;
		const mediaElement = event.currentTarget;
		mediaElement.style.setProperty("--stropa-x", "50%");
		mediaElement.style.setProperty("--stropa-y", "50%");
	};

	return (
		<div
			className={`choose-box ${type === 2 ? "h6-choose-box" : ""} right-swipe ${
				isStropa ? "choose-box-stropa" : ""
			}`}
		>
			<div className="choose-content">
				{isStropa ? (
					<div
						className="choose-media"
						aria-hidden="true"
						onMouseMove={updateCursorPosition}
						onMouseEnter={updateCursorPosition}
						onMouseLeave={resetCursorPosition}
					>
						<img
							src={image ? image : "/images/choose/stropa-bg.jpeg"}
							alt=""
							loading="lazy"
							decoding="async"
							onError={(event) => {
								event.currentTarget.src = "/images/choose/choose-img.webp";
							}}
						/>
						<div
							className="choose-hover-reveal"
							aria-hidden="true"
							style={{
								backgroundImage: `url(${hoverImage ? hoverImage : "/images/choose/stropa-bg-hover.jpeg"})`,
							}}
						></div>
					</div>
				) : (
					<div className="choose-icon">
						<i className={icon}></i>
					</div>
				)}
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
				<Link className="text-btn choose-more-btn" href="/about">
					<span className="btn-text">
						<span>{"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}</span>
					</span>
					<span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default FeatureCard;
