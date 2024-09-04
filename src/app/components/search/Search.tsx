"use client"

import {LuToyBrick} from "react-icons/lu"
import {IoIosRadioButtonOn} from "react-icons/io"
import {FaCheck} from "react-icons/fa6"
import {AiOutlineFontSize} from "react-icons/ai"
import {AiOutlineBgColors} from "react-icons/ai"
import {PiImageSquareBold} from "react-icons/pi"
import {MdGradient} from "react-icons/md"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {CiSearch} from "react-icons/ci"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button"
import {useEffect, useState} from "react"
import Link from "next/link"
import {
  buttonData,
  colorData,
  componentData,
  fontData,
  gradientData,
  iconData,
  imageData,
} from "@/app/assests"

export function Search() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-72 md:w-44 flex m-2 mb-6 z-99">
          <span className="flex flex-1">Search</span>
          <span>
            <CiSearch />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogTitle></DialogTitle>
        <Command className="rounded-lg border shadow-md md:min-w-[470px] text-black dark:text-white">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Components">
              {componentData.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <CommandItem>
                    <LuToyBrick className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Buttons">
              {buttonData.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <CommandItem>
                    <IoIosRadioButtonOn className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Icons">
              {iconData.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <CommandItem>
                    <FaCheck className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Fonts">
              {fontData.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <CommandItem>
                    <AiOutlineFontSize className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Colors">
              {colorData.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <CommandItem>
                    <AiOutlineBgColors className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Images">
              {imageData.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <CommandItem>
                    <PiImageSquareBold className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Gradients">
              {gradientData.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <CommandItem>
                    <MdGradient className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
