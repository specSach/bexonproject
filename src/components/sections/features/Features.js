import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "\u0418\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f",
			desc: "\u041c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043d\u0430 \u043e\u043f\u0435\u0440\u0435\u0436\u0435\u043d\u0438\u0435, \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044f \u043f\u0435\u0440\u0435\u0434\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u0430\u0448 \u0431\u0438\u0437\u043d\u0435\u0441 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e \u043a\u043e\u043d\u043a\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043b \u043d\u0430 \u0440\u044b\u043d\u043a\u0435.",
			icon: "tji-innovative",
		},
		{
			title: "\u042d\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u043e\u0441\u0442\u044c, \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u0430\u044f \u043d\u0430\u0433\u0440\u0430\u0434\u0430\u043c\u0438",
			desc: "\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430, \u043f\u0440\u0438\u0437\u043d\u0430\u043d\u043d\u0430\u044f \u043b\u0438\u0434\u0435\u0440\u0430\u043c\u0438 \u043e\u0442\u0440\u0430\u0441\u043b\u0438, \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442 \u0432\u044b\u0434\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445.",
			icon: "tji-award",
		},
		{
			title: "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
			desc: "\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430 \u0441\u0432\u044f\u0437\u0438: \u043c\u044b \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u0435\u0448\u0430\u0435\u043c \u0432\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438, \u0447\u0442\u043e\u0431\u044b \u0431\u0438\u0437\u043d\u0435\u0441 \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0431\u0435\u0437 \u0441\u0431\u043e\u0435\u0432.",
			icon: "tji-support",
		},
		{
			title: "\u0421\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430",
			desc: "\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0442 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e, \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u043e\u0442\u0440\u0430\u0441\u043b\u0435\u0432\u043e\u0439 \u043e\u043f\u044b\u0442, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044f \u0438\u0437\u043c\u0435\u0440\u0438\u043c\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u0439 \u0440\u043e\u0441\u0442.",
			icon: "tji-team",
		},
	];

	const stropaFeatureMedia = {
		isStropa: true,
		image: "/images/choose/stropa-bg.jpeg",
		hoverImage: "/images/choose/stropa-bg-hover.jpeg",
	};

	const stropaFeatureMediaCompact = {
		...stropaFeatureMedia,
		stropaCompact: true,
	};

	const renderHeading = (showSubTitle = true) => {
		if (type == 2) {
			return (
				<div className="sec-heading-wrap">
					{showSubTitle ? (
						<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
							<i className="tji-box"></i>{" "}
							{"\u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043b\u0443\u0447\u0448\u0435\u0435"}
						</span>
					) : null}
					<div className="heading-wrap-content">
						<div className="sec-heading">
							<h2 className="sec-title title-anim start-anim">
								{"\u0423\u0441\u0438\u043b\u0438\u0432\u0430\u0435\u043c \u0431\u0438\u0437\u043d\u0435\u0441 "}
								<span>
									{"\u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u043e\u0439."}
								</span>
							</h2>
						</div>
						<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
							<ButtonPrimary
								text={"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0432\u043e\u043d\u043e\u043a"}
								url="/contact"
							/>
						</div>
					</div>
				</div>
			);
		}

		const headingTextPrimary = showSubTitle
			? "\u041b\u0435\u043d\u0442\u0430 \u0443\u043f\u0430\u043a\u043e\u0432\u043e\u0447\u043d\u0430\u044f "
			: "\u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 ";
		const headingTextAccent = showSubTitle
			? "\u0442\u043a\u0430\u043d\u0430\u044f"
			: "\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b";

		return (
			<div className="sec-heading text-center">
				{showSubTitle ? (
					<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
						<i className="tji-box"></i>{" "}
						{"\u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043b\u0443\u0447\u0448\u0435\u0435"}
					</span>
				) : null}
				<h2 className="sec-title title-anim start-anim">
					{headingTextPrimary}
					<span>{headingTextAccent}</span>
				</h2>
			</div>
		);
	};

	return (
		<>
			<section id="choose" className="tj-choose-section section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">{renderHeading()}</div>
					</div>
					<div className="row row-gap-4 rightSwipeWrap">
						{features.slice(0, 2).map((feature, idx) => (
							<div key={idx} className="col-md-6">
								<FeatureCard feature={{ ...feature, ...stropaFeatureMedia }} idx={idx} />
							</div>
						))}
					</div>
					<div className="row">
						<div className="col-12">
							<div className="sec-heading text-center" style={{ paddingTop: "40px" }}>
								<h2 className="sec-title title-anim start-anim">
									{"\u041b\u0435\u043d\u0442\u0430 \u0443\u043f\u0430\u043a\u043e\u0432\u043e\u0447\u043d\u0430\u044f "}
									<span>{"\u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u0430\u044f"}</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row row-gap-4 rightSwipeWrap">
						{features.slice(2).map((feature, idx) => (
							<div key={`bottom-${idx}`} className="col-md-6">
								<FeatureCard
									feature={{ ...feature, ...stropaFeatureMedia }}
									idx={idx + 2}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
			{!type ? (
				<section className="tj-choose-section section-gap-2">
					<div className="container">
						<div className="row">
							<div className="col-12">{renderHeading(false)}</div>
						</div>
						<div className="row row-gap-4 rightSwipeWrap">
							{features.map((feature, idx) => (
								<div key={`horizontal-${idx}`} className="col-lg-3 col-md-6">
									<FeatureCard
										feature={{ ...feature, ...stropaFeatureMediaCompact }}
										idx={idx}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			) : null}
		</>
	);
};

export default Features;
