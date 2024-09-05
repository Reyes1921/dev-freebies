import {cn} from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string
  title: string
  description?: string | React.ReactNode
  header: string
  icon?: React.ReactNode
  href: string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl hover:scale-105 transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Image
        src={header}
        alt={title}
        width={300}
        height={300}
        className="object-cover aspect-video"
      />
      <Link href={href}>
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </Link>
    </div>
  )
}
