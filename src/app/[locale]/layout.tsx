import {NextIntlClientProvider} from "next-intl"
import {Overpass} from "next/font/google"
import {getMessages} from "next-intl/server"
import "../globals.css"

const inter = Overpass({subsets: ["latin"]})

interface RootMetadata {
  params: {locale: string}
}

export async function generateMetadata({params}: RootMetadata) {}

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
      <body className={`${inter.className} bg-black`}>
        <NextIntlClientProvider messages={dictionaries}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
