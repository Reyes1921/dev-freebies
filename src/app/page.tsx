import {Cards} from "./components/cards/Cards"
import {Heading} from "./components/home/Heading"

export default function Home() {
  return (
    <>
      <h1 className="hidden">Dev Freebies</h1>
      <Heading />
      <p className="flex justify-center items-center text-xl">
        Discover a collection of valuable websites and resources to streamline
        and enhance your projects
      </p>
      <Cards />
    </>
  )
}
