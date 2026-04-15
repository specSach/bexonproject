import Link from "next/link";

const TopPageBar = () => {
	return (
		<div className="top-page-bar section-gap-x">
			<div className="top-page-bar__inner">
				<p>Собств. производство. Работаем по РФ и СНГ.</p>
				<Link className="top-page-bar__phone" href="tel:+79000000000">
					+7 900 000 00 00
				</Link>
			</div>
		</div>
	);
};

export default TopPageBar;
