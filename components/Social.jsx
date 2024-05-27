import { socials } from "@/data";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map(({ icon, path }, index) => (
				<Link key={index} href={path} className={iconStyles}>
					{icon}
				</Link>
			))}
		</div>
	);
};

export default Social;
