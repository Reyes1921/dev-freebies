import {useTranslations} from "next-intl"

export default function Home() {
  const dict = useTranslations("Title")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="text-white"> {dict("title")}</div>
    </main>
  )
}
