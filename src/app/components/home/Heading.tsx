"use client"

import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect"

export function Heading() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Hub",
    },
    {
      text: "for",
    },
    {
      text: "Essential",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Websites",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
    },
    {
      text: "Resources.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffectSmooth words={words} className="text-3xl" />
    </div>
  )
}
