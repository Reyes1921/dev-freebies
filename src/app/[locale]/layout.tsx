import {NextIntlClientProvider} from "next-intl"
import {Overpass as FontSans} from "next/font/google"
import {getMessages, getTranslations} from "next-intl/server"
import {ThemeProvider} from "@/components/ui/theme-provider"
import {Header} from "../components"
import {cn} from "@/lib/utils"
import "../globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

interface RootMetadata {
  params: {locale: string}
}

export async function generateMetadata({params}: RootMetadata) {
  const t = await getTranslations({params, namespace: "Metadata"})

  return {
    title: t("title"),
    description: t("description"),
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
  params: {locale: string}
}

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>) {
  const dictionaries = await getMessages()

  return (
    <html lang={locale}>
      <body className={cn("min-h-screen font-sans", fontSans.variable)}>
        <NextIntlClientProvider messages={dictionaries}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
