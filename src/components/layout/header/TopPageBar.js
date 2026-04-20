import Link from "next/link";

const TopPageBar = () => {
	return (
		<div className="top-page-bar section-gap-x">
			<div className="top-page-bar__inner">
				<p>Собств. производство. Работаем по РФ и СНГ.</p>
				<Link className="top-page-bar__phone" href="tel:+74992291808">
					+7(499)229-18-08
				</Link>
			</div>
		</div>
	);
};

export default TopPageBar;
