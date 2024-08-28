import Image from "next/image"
import {useTranslations} from "next-intl"
import Link from "next/link"

export const Footer = () => {
  const dict = useTranslations("Links")
  const icons = [
    {
      path: dict("github"),
      src: "/github.svg",
      title: "Github",
      alt: '"github logo',
    },
  ]
  return (
    <footer className="w-full">
      <div className="container flex justify-center md:justify-end items-center p-3">
        <div className="flex">
          {icons.map((icon) => (
            <Link
              href={icon.path}
              key={icon.alt}
              target="_blank"
              className="p-2 hover:scale-110 hover:opacity-70 inline-block"
            >
              <Image
                src={icon.src}
                height="15"
                width="20"
                className="filter dark:invert"
                alt={icon.alt}
              />
            </Link>
          ))}
        </div>
        <p className="text-sm text-black dark:text-white">Reyes Rondón</p>
      </div>
    </footer>
  )
}
