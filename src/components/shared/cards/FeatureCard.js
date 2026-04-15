import Link from "next/link";

const FeatureCard = ({ feature, type, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div className={`choose-box ${type === 2 ? "h6-choose-box" : ""} right-swipe`}>
			<div className="choose-content">
				<div className="choose-icon">
					<i className={icon}></i>
				</div>
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
