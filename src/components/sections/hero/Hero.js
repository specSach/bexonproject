import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section id="home" className="tj-banner-section section-gap-x">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-content">
						<span className="sub-title wow fadeInDown" data-wow-delay=".2s">
							<i className="tji-excellence"></i>{" "}
							{"\u041f\u0440\u0438\u0437\u043d\u0430\u043d\u044b \u0437\u0430 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430"}
						</span>
						<h1 className="banner-title title-anim start-anim">
							{"\u0423\u043f\u0430\u043a\u043e\u0432\u043e\u0447\u043d\u044b\u0435 "}
							<span>{"\u0441\u0442\u0440\u043e\u043f\u044b"}</span>
						</h1>
						<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
							<Link className="banner-link" href="/about">
								<span>
									<i className="tji-arrow-right-big"></i>
								</span>
							</Link>
							<div className="banner-desc">
								{
									"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440\u043e\u0432\u044b\u0435 \u0442\u043a\u0430\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043f\u044b, \u043d\u043e \u0438 \u043f\u043e\u043b\u0438\u043f\u0440\u043e\u043f\u0438\u043b\u0435\u043d\u043e\u0432\u044b\u0435 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0435. \u041f\u043e\u043b\u0438\u043f\u0440\u043e\u043f\u0438\u043b\u0435\u043d\u043e\u0432\u044b\u0435 \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0442\u043e\u043b\u0449\u0438\u043d\u043e\u0439, \u0448\u0438\u0440\u0438\u043d\u043e\u0439 \u0438 \u0440\u0430\u0437\u0440\u044b\u0432\u043d\u043e\u0439 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439."
								}
							</div>
						</div>
					</div>
					<div className="banner-shape">
						<img src="/images/shape/pattern-bg.webp" alt="" />
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img">
						<Image
							data-speed="0.8"
							src="/images/hero/hero-img.webp"
							alt=""
							width={945}
							height={793}
						/>
					</div>
						<div className="box-area">
							<div className="customers-box customers-box-compact">
								<div
									className="customers-number wow fadeInUp"
									data-wow-delay=".5s"
							>
								30K
							</div>
							<h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">
								{"\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443."}
							</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
				<button data-target="#products" className="scroll-down tj-scroll-btn">
					<span>
						<i className="tji-arrow-down-long"></i>
					</span>
					{"\u041f\u0440\u043e\u043a\u0440\u0443\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u0437"}
				</button>
			</div>
		</section>
	);
};

export default Hero;
