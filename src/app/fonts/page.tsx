import {fontData} from "../../data"
import {Items} from "../../components/items/Items"

export default function Fonts() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Fonts</h1>
      <Items dataArray={fontData} />
    </div>
  )
}
