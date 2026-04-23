"use client";

import { ScrollSmoother } from "@/libs/gsap.config";
import { usePathname } from "next/navigation";

const getScrollOffset = () => {
	const topBarOffset = Number.parseFloat(
		getComputedStyle(document.documentElement).getPropertyValue(
			"--top-page-bar-offset"
		)
	);
	const stickyHeader = document.querySelector(".header-duplicate.header-sticky");
	const headerHeight = stickyHeader
		? stickyHeader.getBoundingClientRect().height
		: 105;

	return headerHeight + (Number.isFinite(topBarOffset) ? topBarOffset : 0) + 8;
};

const scrollToHash = (hash) => {
	if (!hash || hash === "#") return false;
	const target = document.querySelector(hash);
	if (!target) return false;

	const offset = getScrollOffset();
	const smoother = ScrollSmoother.get ? ScrollSmoother.get() : null;

	if (smoother) {
		smoother.scrollTo(target, true, `top top+=${offset}`);
	} else {
		const top =
			target.getBoundingClientRect().top + window.pageYOffset - offset;
		window.scrollTo({ top, behavior: "smooth" });
	}

	window.history.replaceState(null, "", hash);
	return true;
};

const useOnePageScroll = () => {
	const pathname = usePathname();

	const handleOnePageNavClick = (event, href) => {
		if (typeof href !== "string") return;

		const hashStart = href.indexOf("#");
		if (hashStart === -1) return;

		const hash = href.slice(hashStart);
		const pathPart = href.slice(0, hashStart);
		const canHandleHere =
			(pathname === "/" || pathname === "") &&
			(pathPart === "" || pathPart === "/");

		if (!canHandleHere) return;

		event.preventDefault();
		scrollToHash(hash);
	};

	return { handleOnePageNavClick };
};

export default useOnePageScroll;
