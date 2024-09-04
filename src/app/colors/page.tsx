import colorData from "../assests/colors/color"
import {Items} from "../components/items/Items"

export default function Colors() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Colors</h1>
      <Items dataArray={colorData} />
    </div>
  )
}
