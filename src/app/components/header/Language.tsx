"use client"
import {HiLanguage} from "react-icons/hi2"
import {useTranslations} from "next-intl"
import {Button} from "@/components/ui/button"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu"

export const Language = () => {
  const dict = useTranslations("Header")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <HiLanguage className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="p-2">
          {dict("languageTitle")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href="/en" locale="en">
          <DropdownMenuItem>{dict("english")}</DropdownMenuItem>
        </Link>
        <Link href="/es" locale="es">
          <DropdownMenuItem>{dict("spanish")}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
