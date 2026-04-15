import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "Какие услуги Bexon предоставляет клиентам?",
			desc: "Начать просто: оставьте заявку через форму обратной связи или позвоните нам, и мы согласуем консультацию по вашему проекту. На каждом этапе вы получаете прозрачную коммуникацию, контроль качества и соблюдение сроков.",
			initActive: true,
		},
		{
			title: "Как начать сотрудничество с корпоративным направлением?",
			desc: "Начать просто: оставьте заявку через форму обратной связи или позвоните нам, и мы согласуем консультацию по вашему проекту. На каждом этапе вы получаете прозрачную коммуникацию, контроль качества и соблюдение сроков.",
			initActive: false,
		},
		{
			title: "Как вы обеспечиваете успех проекта?",
			desc: "Начать просто: оставьте заявку через форму обратной связи или позвоните нам, и мы согласуем консультацию по вашему проекту. На каждом этапе вы получаете прозрачную коммуникацию, контроль качества и соблюдение сроков.",
			initActive: false,
		},
		{
			title: "Сколько времени занимает реализация проекта?",
			desc: "Начать просто: оставьте заявку через форму обратной связи или позвоните нам, и мы согласуем консультацию по вашему проекту. На каждом этапе вы получаете прозрачную коммуникацию, контроль качества и соблюдение сроков.",
			initActive: false,
		},
		{
			title: "Могу ли я отслеживать ход проекта?",
			desc: "Начать просто: оставьте заявку через форму обратной связи или позвоните нам, и мы согласуем консультацию по вашему проекту. На каждом этапе вы получаете прозрачную коммуникацию, контроль качества и соблюдение сроков.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Частые вопросы
									</span>
									<h2 className="sec-title title-anim">
										Нужна <span>помощь?</span> Начните здесь...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									Мы работаем на опережение, используя <br /> передовые
									технологии и <br /> эффективные стратегии.
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Заказать звонок"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Нужна помощь? Начните здесь...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Бесплатная консультация</h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:18884521505">
											<span>1-888-452-1505</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
