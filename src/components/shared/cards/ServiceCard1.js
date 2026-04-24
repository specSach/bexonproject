import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard1 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, img, svg, iconName } = service || {};

	return (
		<div className="service-item style-1">
			<div className="service-img">
				<Image
					src={img ? img : "/images/service/service-1.webp"}
					alt={title ? `${title} - применение упаковочной стропы` : "Изображение услуги"}
					width={870}
					height={450}
				/>
			</div>
			<div className="service-icon">
				<i className={iconName ? iconName : "tji-service-1"}></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
				<p className="desc">{desc}</p>
				<ButtonPrimary
					text={"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}
					url={`/services/${id}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ServiceCard1;
