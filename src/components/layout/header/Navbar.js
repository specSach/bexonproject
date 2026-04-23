"use client";

import Link from "next/link";
import useOnePageScroll from "@/hooks/useOnePageScroll";
import onePageMenu from "@/libs/onePageMenu";

const Navbar = () => {
	const { handleOnePageNavClick } = useOnePageScroll();

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
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
			</nav>
		</div>
	);
};

export default Navbar;
