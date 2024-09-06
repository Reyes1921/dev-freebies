import {Cards} from "./components/cards/Cards"
export default function Home() {
  return (
    <>
      <h1 className="hidden">Dev Freebies</h1>
      <h3 className="text-center text-2xl md:text-4xl font-bold">
        Your Hub for Essential Websites and Resources
      </h3>
      <p className="text-center text-base md:text-lg mt-6">
        Discover a collection of valuable websites and resources to streamline
        and enhance your projects
      </p>
      <Cards />
    </>
  )
}
