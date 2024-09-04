import Image from "next/image"
import Link from "next/link"
import {ModeToggle} from "./ModeToggle"

import {MobileMenu} from "../menu/MobileMenu"

export const Header = () => {
  return (
    <header className="flex justify-between fixed z-30 w-full items-center py-3 px-3 border-b-2 bg-white dark:bg-black">
      <MobileMenu />
      <div className="flex justify-center items-center">
        <Link href={"/"} className="flex justify-center">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Image of logo"
            className="h-[24px] w-[22px] md:w-[29px] dark:invert"
          />
          <h2 className="text-xl md:text-2xl px-2">Dev Freebies</h2>
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
