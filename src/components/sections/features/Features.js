import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Innovative Solutions",
			desc: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep  you competitive in a marketplace.",
			icon: "tji-innovative",
		},
		{
			title: "Award-Winning Expertise",
			desc: "Recognized by industry leaders, our award-winning team has a proven record of delivering  excellence across projects.",
			icon: "tji-award",
		},
		{
			title: "Dedicated Support",
			desc: "Our team is always available to address your concerns, providing quick and effective solution to keep your business.",
			icon: "tji-support",
		},
		{
			title: "Expert Team",
			desc: "Our consultants combine strategy, technology, and industry experience to deliver clear results and sustainable growth.",
			icon: "tji-team",
		},
	];

	const renderHeading = (showSubTitle = true) => {
		if (type == 2) {
			return (
				<div className="sec-heading-wrap">
					{showSubTitle ? (
						<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
							<i className="tji-box"></i>Choose the Best
						</span>
					) : null}
					<div className="heading-wrap-content">
						<div className="sec-heading">
							<h2 className="sec-title title-anim start-anim">
								Empowering Business with <span>Expertise.</span>
							</h2>
						</div>
						<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
							<ButtonPrimary text="Request a Call" url="/contact" />
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="sec-heading text-center">
				{showSubTitle ? (
					<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
						<i className="tji-box"></i>Choose the Best
					</span>
				) : null}
				<h2 className="sec-title title-anim start-anim">
					Empowering Business with <span>Expertise.</span>
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
						{features.map((feature, idx) => (
							<div key={idx} className="col-md-6">
								<FeatureCard feature={feature} idx={idx} />
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
									<FeatureCard feature={feature} idx={idx} />
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
