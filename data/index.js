import { BiLogoPostgresql } from "react-icons/bi";
import {
	FaCss3,
	FaGithub,
	FaHtml5,
	FaJs,
	FaLinkedin,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import { FaDocker, FaGolang, FaJava, FaSass } from "react-icons/fa6";
import {
	SiCplusplus,
	SiExpress,
	SiGnubash,
	SiMongodb,
	SiMysql,
	SiPrisma,
} from "react-icons/si";

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

export const about = {
	title: "About me",
	description:
		"I am a backend developer. I have worked with a variety of technologies and languages, including JavaScript, Node.js, React, and Golang. I am passionate about coding and love to learn new things. I am always looking for new challenges and opportunities to grow as a developer.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Sumith B H",
		},
		{
			fieldName: "Email",
			fieldValue: "sumith2827@gmail.com",
		},
		// {
		// 	fieldName: "Experience",
		// 	fieldValue: "1 year"
		// },
		{
			fieldName: "Location",
			fieldValue: "Bangalore, India",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Kannada, Hindi",
		},
		{
			fieldName: "Hobbies",
			fieldValue: "Coding, Reading, Music",
		},
		{
			fieldName: "Education",
			fieldValue: "B.E in Computer Science",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
	],
};

export const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My experience",
	description:
		"I have worked with a variety of technologies and languages, including JavaScript, Node.js, React, and Golang. I have experience working on both frontend and backend development.",
	items: [
		{
			company: "DRDO CABS",
			position: "SDE Intern",
			duration: "October 2023 - December 2023",
		},
	],
};

export const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description:
		"I am currently pursuing a Bachelor's degree in Computer Science.",
	items: [
		{
			institution: "MVJ College of Engineering",
			degree: "B.E in Computer Science",
			duration: "2021 - 2025",
		},
		{
			institution: "St. Joseph's Pre-University College",
			degree: "High School",
			duration: "2019 - 2021",
		},
	],
};

export const skills = {
	title: "My skills",
	description:
		"I have experience working with a variety of technologies and languages. Here are some of the skills:",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "HTML",
		},
		{
			icon: <FaCss3 />,
			name: "CSS",
		},
		{
			icon: <FaJs />,
			name: "JavaScript",
		},
		{
			icon: <FaReact />,
			name: "React",
		},
		{
			icon: <FaNodeJs />,
			name: "Node.js",
		},
		{
			icon: <FaGolang />,
			name: "Golang",
		},
		{
			icon: <FaJava />,
			name: "Java",
		},
		{
			icon: <FaSass />,
			name: "Sass",
		},
		{
			icon: <SiCplusplus />,
			name: "C++",
		},
		{
			icon: <SiExpress />,
			name: "Express",
		},
		{
			icon: <SiGnubash />,
			name: "Bash",
		},
		{
			icon: <SiMongodb />,
			name: "MongoDB",
		},
		{
			icon: <SiMysql />,
			name: "MySQL",
		},
		{
			icon: <SiPrisma />,
			name: "Prisma",
		},
		{
			icon: <BiLogoPostgresql />,
			name: "PostgreSQL",
		},
		{
			icon: <FaDocker />,
			name: "Docker",
		},
	],
};
