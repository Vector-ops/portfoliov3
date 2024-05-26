"use client";

import { links } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="flex gap-8">
			{links.map(({ path, name }, index) => (
				<Link
					href={path}
					key={index}
					className={`${
						path === pathname &&
						"text-accent border-b-2 border-accent"
					} capitalize font-medium hover:text-accent transition-all`}
				>
					{name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
