import Image from "next/image"
import {ModeToggle} from "./ModeToggle"
import Link from "next/link"
import {Language} from "./Language"

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b-2">
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="Image of logo"
            className="w-[25px] md:w-[50px] dark:invert"
          />
        </Link>
        <h2 className="text-xl md:text-4xl px-5">Free Dev Freebies</h2>
      </div>
      <div className="flex justify-around items-center">
        <div className="px-1">
          <Language />
        </div>
        <div className="px-1">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
