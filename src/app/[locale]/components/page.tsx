import {useTranslations} from "next-intl"

export default function Components() {
  const dict = useTranslations("Components")
  return <h1 className="text-white">{dict("title")}</h1>
}
