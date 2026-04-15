import Link from "next/link";

const Footer = () => {
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
								<h5 className="title">Услуги</h5>
								<ul>
									<li>
										<Link href="/services/1">Клиентский опыт</Link>
									</li>
									<li>
										<Link href="/services/2">Программы обучения</Link>
									</li>
									<li>
										<Link href="/services/3">Бизнес-стратегия</Link>
									</li>
									<li>
										<Link href="/services/4">Развитие персонала</Link>
									</li>
									<li>
										<Link href="/services/5">ESG-консалтинг</Link>
									</li>
									<li>
										<Link href="/services/6">Маркетинговая стратегия</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Разделы</h5>
								<ul>
									<li>
										<Link href="/contact">Контакты</Link>
									</li>
									<li>
										<Link href="/team">Команда</Link>
									</li>
									<li>
										<Link href="#">Достижения</Link>
									</li>
									<li>
										<Link href="/careers">
											Карьера <span className="badge">Новое</span>
										</Link>
									</li>
									<li>
										<Link href="/blogs">Новости</Link>
									</li>
									<li>
										<Link href="#">Отзывы</Link>
									</li>
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
											<Link href="tel:10095447818">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+1 (009) 544-7818</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@bexon.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@bexon.com</span>
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
										&copy; 2025 
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
