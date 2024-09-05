"use client"

import {links} from "@/app/helpers"
import {Search} from "../search/Search"
import {usePathname} from "next/navigation"
import Link from "next/link"
import {Badge} from "@/components/ui/badge"
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
                    {link.icon}
                    <span className="ml-3 flex flex-1">{link.name}</span>
                    <Badge variant="secondary">{link?.number}</Badge>
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
