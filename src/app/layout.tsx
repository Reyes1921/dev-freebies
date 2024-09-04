import {Overpass as FontSans} from "next/font/google"
import {ThemeProvider} from "@/components/ui/theme-provider"
import {cn} from "@/lib/utils"
import "./globals.css"
import {Footer, Header, Menu} from "./components"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export async function generateMetadata() {
  return {
    title: "Dev Freebies - Free content",
    description: "Free resources for web development and more...",
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "https://dev-freebies.vercel.app/",
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
          <main className="container flex min-h-screen flex-col items-center justify-between py-10  bg-white dark:bg-black">
            <Menu />
            <div className="md:left-56 pt-10 md:pt-0 p-5 md:pr-9 md:absolute top-16 md:top-24 right-0 left-0">
              {children}
            </div>
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
