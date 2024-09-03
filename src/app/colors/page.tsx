import colorData from "../assests/colors/color"
import {Items} from "../components/items/Items"

export default function Colors() {
  colorData
  return (
    <div className="relative">
      <h1 className="text-3xl">Colors</h1>
      <Items colorData={colorData} />
    </div>
  )
}
