import {ModeToggle} from "./ModeToggle"

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 ">
      <div> HEADER</div>
      <ModeToggle />
    </div>
  )
}
