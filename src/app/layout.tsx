import {Overpass as FontSans} from "next/font/google"
import {ThemeProvider} from "@/components/ui/theme-provider"
import {cn} from "@/lib/utils"
import "./globals.css"
import {Footer, Header} from "./components"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export async function generateMetadata() {
  return {
    title: "Web Dev Freebies - Free content",
    description: "Free resources for web development and more...",
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "https://web-dev-freebies.vercel.app/",
    },
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
