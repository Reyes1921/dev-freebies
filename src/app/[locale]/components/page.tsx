import {useTranslations} from "next-intl"

export default function Components() {
  const dict = useTranslations("Components")
  return (
    <div className="bg-white dark:bg-black">
      <h1 className="text-black dark:text-white">{dict("title")}</h1>
    </div>
  )
}
