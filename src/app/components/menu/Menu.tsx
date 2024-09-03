import Link from "next/link"
import {LuToyBrick} from "react-icons/lu"

export const Menu = () => {
  const menuLinks = [
    {
      name: "components",
      href: "components",
      icon: `{<LuToyBrick />}`,
    },
    {name: "icons", href: "icons"},
    {name: "fonts", href: "button"},
    {name: "colors", href: "colors"},
  ]

  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 md:flex flex-shrink-0 flex-col w-56 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r-2 border-border dark:border-border dark:bg-black dark:text-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1 dark:bg-black dark:border-white dark:text-white">
            <ul className="space-y-2 pb-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base capitalize text-black font-normal rounded-lg flex items-center p-1 hover:bg-accent hover:dark:text-white group dark:text-zinc-500"
                  >
                    <LuToyBrick />
                    <span className="ml-3">{link.name}</span>
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
