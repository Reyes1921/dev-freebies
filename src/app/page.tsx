import {Menu} from "./components/menu/Menu"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <Menu />
      <main>
        <h1 className="text-black dark:text-white text-left">Hello World!</h1>
      </main>
    </main>
  )
}
