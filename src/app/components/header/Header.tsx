import Image from "next/image"
import Link from "next/link"
import {ModeToggle} from "./ModeToggle"

export const Header = () => {
  return (
    <header className="flex justify-between fixed z-30 w-full items-center py-3 px-5 border-b-2">
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
      <div className="flex justify-center items-center">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="Image of logo"
            className="w-[25px] md:w-[35px] dark:invert"
          />
          <h2 className="text-xl md:text-2xl px-5">Free Dev Freebies</h2>
        </Link>
      </div>
      <div className="flex justify-around items-center">
        <div className="px-1">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
