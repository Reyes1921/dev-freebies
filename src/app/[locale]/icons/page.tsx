import {useTranslations} from "next-intl"

export default function Icons() {
  const dict = useTranslations("Icons")
  return <h1 className="text-white">{dict("title")}</h1>
}
