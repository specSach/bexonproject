"use client";

import { useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";
import ChooseDetailsModal from "@/components/shared/modals/ChooseDetailsModal";

const Features = ({ type }) => {
	const [activeDetails, setActiveDetails] = useState(null);

	const features = [
		{
			title: "Инновационные решения",
			desc: "Мы работаем на опережение, применяя передовые технологии и стратегии, чтобы ваш бизнес уверенно конкурировал на рынке.",
			icon: "tji-innovative",
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

	const stropaFeatureMedia = {
		isStropa: true,
		image: "/images/choose/stropa-bg.jpeg",
		hoverImage: "/images/choose/stropa-bg-hover.jpeg",
	};

	const stropaFeatureMediaCompact = {
		...stropaFeatureMedia,
		stropaCompact: true,
	};

	const sectionGapDescs = [
		"Это упаковочная стропа из мягкого полиэстера. Стропу армируют полипропиленовой нитью и покрывают полимерным составом, который обеспечивает повышенную разрывную нагрузку. Полиэстеровая стропа применяется в процессе упаковки в термоусадочную пленку.",
		"Это упаковочная тканая стропа. Состоит из полиэфирного волокна. Подбирать такую стропу необходимо в зависимости от груза, который нужно упаковать или закрепить. Тканая стропа очень часто применяется в процессе упаковки в термоусадочную пленку.",
		"Полипропиленовая стропа имеет малый вес, не подвержена коррозии, безопасна при эксплуатации, а также может быть подвержена вторичной переработке. Используют для обвязки и крепежа грузов различного веса и габаритов.",
		"Обвязочная стропа предназначена для стяжки и крепления разнообразных грузов. Обвязка из полиэстера со временем не потеряет своей упругости, не вытянется и будет такой же надежной вне зависимости от условий транспортировки и хранения. GPL стропа не повреждает кромки упаковки или самого изделия.",
	];

	const detailsItems = [
		{
			id: "mp-stropa",
			title: "МП Стропа",
			description: sectionGapDescs[0],
			manufacturer: "Россия",
			images: [
				{ src: "/images/choose/stropa-bg.jpeg", alt: "МП стропа" },
				{ src: "/images/choose/stropa-bg-hover.jpeg", alt: "Фактура МП стропы" },
			],
			table: {
				columns: ["Наименование", "Разрывная нагрузка", "Длина стропы в рулоне"],
				rows: [
					["GP15", "820 кг", "250/500 м"],
					["GP19", "1120 кг", "250/500 м"],
					["GP23", "2656 кг", "250/500 м"],
				],
			},
		},
		{
			id: "pef-stropa",
			title: "ПЭФ Стропа",
			description: sectionGapDescs[1],
			manufacturer: "Германия",
			images: [
				{ src: "/images/choose/stropa-bg-hover.jpeg", alt: "ПЭФ стропа" },
				{ src: "/images/choose/stropa-bg.jpeg", alt: "Фактура ПЭФ стропы" },
			],
			table: {
				columns: ["Наименование", "Разрывная нагрузка", "Длина стропы в рулоне"],
				rows: [
					["GL19", "928 кг", "600 м"],
					["GL25", "785 кг", "500 м"],
					["GL32", "1500 кг", "250 м"],
				],
			},
		},
		{
			id: "polypropylene-stropa",
			description: sectionGapDescs[2],
			images: [
				{ src: "/images/gallery/project-pack-2.jpg", alt: "Полипропиленовая стропа" },
				{ src: "/images/gallery/project-pack-3.jpg", alt: "Применение полипропиленовой стропы" },
			],
			table: {
				columns: ["Наименование", "Разрывная нагрузка", "Метров в бухте", "Цвет"],
				rows: [
					["GLPP 12x0,5", "130 кг", "3000 м", "Серый/белый"],
					["GLPP 12x0,8", "190 кг", "2000 м", "Серый/белый"],
					["GLPP 12x0,8", "190 кг", "2400 м", "Серый/белый"],
					["GLPP 15x0,6", "180 кг", "2400 м", "Серый/белый/черный/синий"],
					["GLPP 15x0,8", "240 кг", "2000 м", "Серый/белый"],
					["GLPP 19x0,1", "430 кг", "1000 м", "Серый/белый"],
				],
			},
		},
		{
			id: "gpl-stropa",
			description: sectionGapDescs[3],
			images: [
				{ src: "/images/gallery/project-pack-4.jpg", alt: "GPL стропа" },
				{ src: "/images/gallery/project-pack-1.jpg", alt: "Применение GPL стропы" },
			],
			table: {
				columns: ["Наименование", "Разрывная нагрузка", "Метров в бухте", "Цвет"],
				rows: [
					["GLP 12x0,6", "400 кг", "1800 м", "Зеленый"],
					["GLP 15,5x0,89", "600 кг", "1250 м", "Зеленый"],
					["GLP 16x0,1", "650 кг", "1100 м", "Зеленый"],
					["GLP 19x1,0", "860 кг", "1000 м", "Зеленый"],
				],
			},
		},
	];

	const openDetails = (index) => {
		setActiveDetails(detailsItems[index] ? detailsItems[index] : null);
	};

	const closeDetails = () => {
		setActiveDetails(null);
	};

	const renderHeading = (showSubTitle = true) => {
		if (type == 2) {
			return (
				<div className="sec-heading-wrap">
					{showSubTitle ? (
						<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
							<i className="tji-box"></i> Выбирайте лучшее
						</span>
					) : null}
					<div className="heading-wrap-content">
						<div className="sec-heading">
							<h2 className="sec-title title-anim start-anim">
								Усиливаем бизнес <span>экспертизой.</span>
							</h2>
						</div>
						<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
							<ButtonPrimary text={"Заказать звонок"} url="/contact" />
						</div>
					</div>
				</div>
			);
		}

		const headingTextPrimary = showSubTitle
			? "Стропа упаковочная "
			: "Вспомогательные ";
		const headingTextAccent = showSubTitle ? "тканая" : "материалы";

		return (
			<div className="sec-heading text-center">
				{showSubTitle ? (
					<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
						<i className="tji-box"></i> Выбирайте лучшее
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
			<section id="products" className="tj-choose-section section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">{renderHeading()}</div>
					</div>
					<div className="row row-gap-4 rightSwipeWrap">
						{features.slice(0, 2).map((feature, idx) => (
							<div key={idx} className="col-md-6">
								<FeatureCard
									feature={{
										...feature,
										...stropaFeatureMedia,
										title: idx === 0 ? "МП Стропа" : "ПЭФ Стропа",
										desc: sectionGapDescs[idx],
									}}
									idx={idx}
									onDetailsOpen={() => openDetails(idx)}
								/>
							</div>
						))}
					</div>
					<div className="row">
						<div className="col-12">
							<div className="sec-heading text-center" style={{ paddingTop: "40px" }}>
								<h2 className="sec-title title-anim start-anim">
									Стропа упаковочная <span>пластиковая</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row row-gap-4 rightSwipeWrap">
						{features.slice(2).map((feature, idx) => {
							const detailsIdx = idx + 2;
							return (
								<div key={`bottom-${idx}`} className="col-md-6">
									<FeatureCard
										feature={{
											...feature,
											...stropaFeatureMedia,
											title: "",
											desc: sectionGapDescs[detailsIdx],
										}}
										idx={detailsIdx}
										onDetailsOpen={() => openDetails(detailsIdx)}
									/>
								</div>
							);
						})}
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
										onDetailsOpen={() => openDetails(idx)}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			) : null}

			<ChooseDetailsModal
				item={activeDetails}
				isOpen={Boolean(activeDetails)}
				onClose={closeDetails}
			/>
		</>
	);
};

export default Features;
