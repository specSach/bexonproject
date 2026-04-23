"use client";

import Link from "next/link";
import useOnePageScroll from "@/hooks/useOnePageScroll";
import onePageMenu from "@/libs/onePageMenu";

const Footer = () => {
	const { handleOnePageNavClick } = useOnePageScroll();

	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo.webp" alt="Logos" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Развиваем и персонализируем клиентский путь, повышая
										удовлетворенность и лояльность.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Меню</h5>
								<ul>
									{onePageMenu.map((item) => (
										<li key={item.id}>
											<Link
												href={item.href}
												onClick={(event) => handleOnePageNavClick(event, item.href)}
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="tel:+74992291808">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+7(499)229-18-08</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@glstrap.ru">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@glstrap.ru</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
										&copy; 2025{" "}
										<Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Bexon
										</Link>{" "}
										Все права защищены
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer;
