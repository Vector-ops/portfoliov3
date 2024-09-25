import { BiLogoPostgresql } from "react-icons/bi";
import {
	FaAws,
	FaCss3,
	FaEnvelope,
	FaGithub,
	FaHtml5,
	FaJs,
	FaLinkedin,
	FaMapMarkerAlt,
	FaNodeJs,
	FaPhoneAlt,
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
	// {
	// 	name: "services",
	// 	path: "/services",
	// },
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "projects",
		path: "/projects",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

export const socials = [
	{
		icon: <FaGithub />,
		path: "https://github.com/Vector-ops",
	},
	{
		icon: <FaLinkedin />,
		path: "https://www.linkedin.com/in/sumithbh/",
	},
];

export const stats = [
	{
		num: 1,
		text: "Year of Experience",
	},
	{
		num: 15,
		text: "Projects Completed",
	},

	{
		num: 6,
		text: "Technologies mastered",
	},

	{
		num: 1245,
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
		"Hi I am Sumith, CS undergrad with a passion for coding and technology. I have experience working with a variety of technologies and languages, including JavaScript, Node.js, React, and Golang. I have experience working on both frontend and backend development. I like to build developer tools, web applications, and CLI utilities. I am always looking for new challenges and opportunities to learn and grow.",
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
			fieldValue: "English, Kannada",
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
			company: "GDSC MVJCE",
			position: "Backend Developer",
			duration: "July 2023 - Present",
		},
		{
			company: "DRDO CABS",
			position: "Backend Developer Intern",
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
			icon: <FaGolang />,
			name: "Golang",
		},
		{
			icon: <FaNodeJs />,
			name: "Node.js",
		},
		{
			icon: <SiExpress />,
			name: "Express",
		},
		{
			icon: <FaDocker />,
			name: "Docker",
		},
		{
			icon: <FaAws />,
			name: "AWS",
		},
		{
			icon: <BiLogoPostgresql />,
			name: "PostgreSQL",
		},
		{
			icon: <FaReact />,
			name: "React",
		},
		{
			icon: <FaJava />,
			name: "Java",
		},
		{
			icon: <SiCplusplus />,
			name: "C++",
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
	],
};

export const projects = [
	{
		num: "01",
		category: "fullstack",
		title: "GDSC MVJCE Website",
		description:
			"The GDSC MVJCE Website is a dynamic platform developed using Next.js 13, styled-components, react-three-fiber, prisma and various other packages. It serves as the central hub for the Google Developer Student Club community at MVJ College of Engineering, providing interactive sections, event registration, blog showcases, team information, and FAQs.",
		stack: [
			{
				name: "Next.js",
			},
			{
				name: "Framer Motion",
			},
			{
				name: "Postgres",
			},
			{
				name: "Prisma",
			},
		],
		image: "/assets/projects/gdscmvjce.png",
		live: "https://gdscmvjce.vercel.app",
		github: "https://github.com/Vector-ops/gdsc-mvjce-website",
	},
	{
		num: "02",
		category: "fullstack",
		title: "Quail - Bookstore",
		description:
			"Quail is an online bookstore that offers a wide range of books, from fiction to non-fiction, and from bestsellers to classics. The website is built using React, TypeScript, Expressjs and Postgres. It features a responsive design, user authentication, and a shopping cart system.",
		stack: [
			{
				name: "React",
			},
			{
				name: "Node.js",
			},
			{
				name: "PostgreSQL",
			},
			{
				name: "Prisma",
			},
			{
				name: "Express",
			},
		],
		image: "/assets/projects/quail.png",
		live: "https://quail.vercel.app/",
		github: "https://github.com/Vector-ops/quail",
	},

	{
		num: "03",
		category: "Interpreter",
		title: "Reboot - Interpreted Language",
		description:
			"Reboot is an interpreted programming language developed using Golang. The language is designed to be simple and easy to use. The language features a simple syntax, with support for variables, functions, loops, and conditionals.",
		stack: [
			{
				name: "Golang",
			},
		],
		image: "/assets/projects/reboot.png",
		live: "",
		github: "https://github.com/Vector-ops/reboot",
	},

	{
		num: "04",
		category: "Command Line",
		title: "Mapil",
		description:
			"Mapil is a simple command line utility to store your passwords, API keys, bookmarks, TODO lists etc with a whole set of features making it easier to acces and manage the data. It provides quick access to your data and stores data locally on your PC which you can access anytime directly from the terminal. Mapil is continously getting new features and updates.",
		stack: [
			{
				name: "Golang",
			},
			{
				name: "Terminal UI",
			},
		],
		image: "/assets/projects/mapil.png",
		live: "",
		github: "https://github.com/Vector-ops/mapil",
	},

	{
		num: "05",
		category: "Command Line",
		title: "Battleships Game",
		description:
			"BattleShips is a CLI-based game developed using Golang. The game is a recreation of the classic Battleships game, where players place their ships on a grid and take turns to guess the location of their opponent's ships. The game features a simple and intuitive interface, with clear instructions and feedback for the players.",
		stack: [
			{
				name: "Golang",
			},
		],
		image: "/assets/projects/battleships.png",
		live: "",
		github: "https://github.com/Vector-ops/battleships",
	},
];

export const info = [
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "sumith2827@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Bangalore, India",
	},
];
