import { FaGithub, FaLinkedin } from "react-icons/fa";

export const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "services",
		path: "/services",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "work",
		path: "/work",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

export const socials = [
	{
		icon: <FaGithub />,
		path: "",
	},
	{
		icon: <FaLinkedin />,
		path: "",
	},
];

export const stats = [
	{
		num: 12,
		text: "Years of Experience",
	},
	{
		num: 100,
		text: "Projects Completed",
	},

	{
		num: 8,
		text: "Technologies mastered",
	},

	{
		num: 254,
		text: "Code commits",
	},
];

export const services = [
	{
		num: "01",
		title: "Web Development",
		description:
			"I can help you build a website from scratch or improve an existing one.",
		href: "/services/web-development",
	},
	{
		num: "02",
		title: "UI/UX Design",
		description:
			"I can help you design a beautiful and user-friendly interface for your website.",
		href: "/services/web-development",
	},
	{
		num: "03",
		title: "Animation",
		description:
			"I can help you create a beautiful and engaging animation for your website.",
		href: "/services/web-development",
	},
	{
		num: "04",
		title: "SEO",
		description:
			"I can help you optimize your website for search engines and improve your ranking.",
		href: "/services/web-development",
	},
];
