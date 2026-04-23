import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import getPortfolio from "@/libs/getPortfolio";

const Portfolios1 = () => {
	const customProjectImages = [
		"/images/gallery/project-pack-1.jpg",
		"/images/gallery/project-pack-2.jpg",
		"/images/gallery/project-pack-3.jpg",
		"/images/gallery/project-pack-4.jpg",
	];

	const portfolio = getPortfolio()
		?.slice(0, 4)
		?.map((item, idx) => ({ ...item, img: customProjectImages[idx] || item.img }));

	return (
		<section id="gallery" className="tj-project-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>
								{"\u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f"}
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading">
									<h2 className="sec-title title-anim">
										{"\u041a\u0430\u043a \u0441\u0442\u0440\u043e\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432 "}
										<span>
											{"\u043b\u043e\u0433\u0438\u0441\u0442\u0438\u043a\u0435 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435."}
										</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".5s">
									{
										"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u043a\u0430\u043a \u043d\u0430\u0448\u0438 \u0441\u0442\u0440\u043e\u043f\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043e\u0431\u0432\u044f\u0437\u043a\u0435 \u043f\u0430\u043b\u043b\u0435\u0442, \u043c\u0435\u0442\u0430\u043b\u043b\u043e\u043f\u0440\u043e\u043a\u0430\u0442\u0430 \u0438 \u043a\u0440\u0443\u043f\u043d\u043e\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043d\u044b\u0445 \u0433\u0440\u0443\u0437\u043e\u0432. \u041f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u043c \u0442\u0438\u043f \u0441\u0442\u0440\u043e\u043f\u044b \u043f\u043e\u0434 \u0437\u0430\u0434\u0430\u0447\u0443, \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438."
									}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="project-area tj-arrange-container">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard1
											key={idx}
											portfolio={portfolioSingle}
											hideOverlay={true}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios1;
