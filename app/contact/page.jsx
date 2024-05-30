"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { info } from "@/data";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
const Contact = () => {
	const formRef = useRef();

	const [form, setForm] = useState({
		firstname: "",
		lastname: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				{
					from_name: form.firstname + " " + form.lastname,
					to_name: "Sumith B H",
					from_email: form.email,
					to_email: "sumith2827@gmail.com",
					message: form.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_KEY
			)
			.then(
				() => {
					setLoading(false);
					alert(
						"Thank you for your message. I will get back to you soon."
					);

					setForm({
						firstname: "",
						lastname: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong. Please try again later.");
				}
			);
	};
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1.8, duration: 0.5, ease: "easeIn" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px] ">
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
						>
							<h3 className="text-4xl text-accent">
								Let&apos;s work together
							</h3>
							<p className="text-white/60">
								Have a project you&apos;d like to discuss?
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="firstname"
									name="firstname"
									value={form.firstname}
									placeholder="Firstname"
									required
									onChange={handleChange}
								/>
								<Input
									type="lastname"
									name="lastname"
									placeholder="Lastname"
									value={form.lastname}
									required
									onChange={handleChange}
								/>
							</div>
							<Input
								type="email"
								name="email"
								placeholder="Email"
								value={form.email}
								onChange={handleChange}
								required
							/>
							{/* <Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel placeholder="Select a service" />
										<SelectItem value="est">
											Web Development
										</SelectItem>
										<SelectItem value="est">
											UI/UX Design
										</SelectItem>
										<SelectItem value="est">
											Animation
										</SelectItem>
										<SelectItem value="est">SEO</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select> */}

							<Textarea
								className="h-[200px]"
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								placeholder="Type your message here."
							/>
							<Button size="sm" className="max-w-40">
								{loading ? "Sending..." : "Send"}
							</Button>
						</form>
					</div>
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
						<ul className="flex flex-col gap-10">
							{info.map(({ icon, title, description }, index) => (
								<li
									key={index}
									className="flex items-center gap-6"
								>
									<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
										<div className="text-[28px]">
											{icon}
										</div>
									</div>
									<div className="flex-1 ">
										<p className="text-white/60">{title}</p>
										<h3 className="text-xl">
											{description}
										</h3>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
