import Image from "next/image"
import Link from "next/link"
import {ModeToggle} from "./ModeToggle"

import {MobileMenu} from "../menu/MobileMenu"

export const Header = () => {
  return (
    <header className="flex justify-between fixed z-30 w-full items-center py-3 px-5 border-b-2">
      <MobileMenu />
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
