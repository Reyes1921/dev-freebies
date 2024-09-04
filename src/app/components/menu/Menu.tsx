"use client"

import Link from "next/link"
import {LuToyBrick} from "react-icons/lu"
import {FaCheck} from "react-icons/fa6"
import {AiOutlineFontSize} from "react-icons/ai"
import {AiOutlineBgColors} from "react-icons/ai"
import {IoIosRadioButtonOn} from "react-icons/io"
import {PiImageSquareBold} from "react-icons/pi"
import {MdGradient} from "react-icons/md"
import {links} from "@/app/helpers"
import {usePathname} from "next/navigation"
import {Search} from "../search/Search"

const {menuLinks} = links()

export const Menu = () => {
  const currentPath = usePathname()

  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 md:flex flex-shrink-0 flex-col w-52 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r-2 border-border dark:border-border dark:bg-black dark:text-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto bg-white dark:bg-black">
          <Search />
          <div className="flex-1 px-1 bg-white divide-y space-y-1 dark:bg-black dark:border-white dark:text-white">
            <ul className="space-y-2 pb-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      ${
                        currentPath == `/${link.href}`
                          ? " dark:text-white font-bold bg-accent"
                          : " hover:dark:text-white group dark:text-zinc-500"
                      } text-base capitalize text-black font-normal rounded-lg flex items-center p-1 px-3 hover:bg-accent hover:dark:text-white group`}
                  >
                    {
                      link.icon &&
                        (link.icon === "LuToyBrick" ? (
                          <LuToyBrick />
                        ) : link.icon === "FaCheck" ? (
                          <FaCheck />
                        ) : link.icon === "AiOutlineFontSize" ? (
                          <AiOutlineFontSize />
                        ) : link.icon === "AiOutlineBgColors" ? (
                          <AiOutlineBgColors />
                        ) : link.icon === "IoIosRadioButtonOn" ? (
                          <IoIosRadioButtonOn />
                        ) : link.icon === "PiImageSquareBold" ? (
                          <PiImageSquareBold />
                        ) : link.icon === "MdGradient" ? (
                          <MdGradient />
                        ) : (
                          <LuToyBrick />
                        )) // Default icon if not found
                    }
                    <span className="ml-3 flex flex-1">{link.name}</span>
                    <span className="flex flex-2 bg-accent-foreground rounded-md text-white dark:text-black px-1 text-sm font-bold">
                      {link?.number}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}
