import {useTranslations} from "next-intl"

export default function Home() {
  const dict = useTranslations("Title")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <h1 className="text-black dark:text-white">{dict("title")}</h1>
    </main>
  )
}
