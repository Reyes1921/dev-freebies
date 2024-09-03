import Link from "next/link"
import {LuToyBrick} from "react-icons/lu"
import {FaCheck} from "react-icons/fa6"
import {AiOutlineFontSize} from "react-icons/ai"
import {AiOutlineBgColors} from "react-icons/ai"
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

const {menuLinks} = links()

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
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
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <nav
          id="sidebar"
          className="fixed flex md:hidden z-20 h-full top-0 left-0 pt-16 flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 dark:border-border dark:bg-black dark:text-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-4 bg-white divide-y space-y-1 dark:bg-black dark:border-white dark:text-white">
                <ul className="space-y-2 pb-2">
                  {menuLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="text-base capitalize text-black font-normal rounded-lg flex items-center p-1 px-3 hover:bg-accent hover:dark:text-white group dark:text-zinc-500"
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
                              ) : link.icon === "FaCheck" ? (
                                <FaCheck />
                              ) : link.icon === "FaCheck" ? (
                                <FaCheck />
                              ) : (
                                <LuToyBrick />
                              )) // Default icon if not found
                          }
                          <span className="ml-3">{link.name}</span>
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
