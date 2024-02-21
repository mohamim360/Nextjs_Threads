import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css";
//SEO
const metadata = {
	title: 'Threads',
	description: "A Next,js 14 meta threads application"
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">

				<body className={`${inter.className} bg-dark-1`}>
					{/*EX: <body className={`inter-font bg-dark-1`}>*/}
				</body>
			</html>
		</ClerkProvider>
	)
}