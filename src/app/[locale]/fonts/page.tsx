import {useTranslations} from "next-intl"

export default function Fonts() {
  const dict = useTranslations("Fonts")
  return <h1 className="text-white">{dict("title")}</h1>
}
