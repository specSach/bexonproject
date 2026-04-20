import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Инновационные решения",
			desc: "Мы работаем на опережение, применяя передовые технологии и стратегии, чтобы ваш бизнес уверенно конкурировал на рынке.",
			icon: "tji-innovative",
			isStropa: true,
			image: "/images/choose/stropa-bg.jpeg",
			hoverImage: "/images/choose/stropa-bg-hover.jpeg",
		},
		{
			title: "Экспертность, отмеченная наградами",
			desc: "Наша команда, признанная лидерами отрасли, стабильно достигает выдающихся результатов в проектах.",
			icon: "tji-award",
		},
		{
			title: "Выделенная поддержка",
			desc: "Наша команда всегда на связи: мы быстро и эффективно решаем ваши задачи, чтобы бизнес работал без сбоев.",
			icon: "tji-support",
		},
		{
			title: "Сильная команда",
			desc: "Наши консультанты объединяют стратегию, технологии и отраслевой опыт, обеспечивая измеримый результат и устойчивый рост.",
			icon: "tji-team",
		},
	];

	const renderHeading = (showSubTitle = true) => {
		if (type == 2) {
			return (
				<div className="sec-heading-wrap">
					{showSubTitle ? (
						<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
							<i className="tji-box"></i>Выбирайте лучшее
						</span>
					) : null}
					<div className="heading-wrap-content">
						<div className="sec-heading">
							<h2 className="sec-title title-anim start-anim">
								Усиливаем бизнес <span>экспертизой.</span>
							</h2>
						</div>
						<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
							<ButtonPrimary text="Заказать звонок" url="/contact" />
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="sec-heading text-center">
				{showSubTitle ? (
					<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
						<i className="tji-box"></i>Выбирайте лучшее
					</span>
				) : null}
				<h2 className="sec-title title-anim start-anim">
					Усиливаем бизнес <span>экспертизой.</span>
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
