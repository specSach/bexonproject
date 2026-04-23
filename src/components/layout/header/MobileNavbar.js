"use client";

import Link from "next/link";
import useOnePageScroll from "@/hooks/useOnePageScroll";
import onePageMenu from "@/libs/onePageMenu";

const MobileNavbar = ({ onNavigate }) => {
	const { handleOnePageNavClick } = useOnePageScroll();

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{onePageMenu.map((item) => (
								<li key={item.id}>
									<Link
										href={item.href}
										onClick={(event) => {
											handleOnePageNavClick(event, item.href);
											if (onNavigate) onNavigate();
										}}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
