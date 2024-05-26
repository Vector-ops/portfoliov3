import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

export const metadata = {
	title: "Portfolio | Sumith",
	description: "Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={jetbrainsMono.variable}>
				<Header />
				<StairEffect />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
