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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {usePathname} from "next/navigation"
import {Search} from "../search/Search"
import Image from "next/image"

const {menuLinks} = links()

export const MobileMenu = () => {
  const currentPath = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild className="z-100">
        <button
          id="toggleSidebarMobile"
          aria-expanded="true"
          aria-controls="sidebar"
          className="md:hidden mr-2 text-black dark:text-white hover:text-gray-900 cursor-pointer p-2 focus:ring-2 focus:ring-gray-100 rounded"
        >
          <svg
            id="toggleSidebarMobileHamburger"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            id="toggleSidebarMobileClose"
            className="w-6 h-6 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 border-0">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-center">
              <Image
                src="/logo.svg"
                width={40}
                height={40}
                alt="Image of logo"
                className="h-[24px] w-[22px] md:w-[29px] dark:invert"
              />
              <h2 className="text-xl md:text-2xl px-2">Dev Freebies</h2>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav
          id="sidebar"
          className="fixed flex md:hidden z-99 h-full top-0 left-0 pt-16 flex-shrink-0 flex-col w-80 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 dark:border-border dark:bg-black dark:text-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-4 bg-white divide-y space-y-1 dark:bg-black dark:border-white dark:text-white">
                <ul className="space-y-2 pb-2">
                  <Search />
                  {menuLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className={`
                      ${
                        currentPath == `/${link.href}`
                          ? " dark:text-white font-bold bg-accent"
                          : " hover:dark:text-white group dark:text-white"
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
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
