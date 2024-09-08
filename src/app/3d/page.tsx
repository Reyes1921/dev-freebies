import {tdData} from "../../data"
import {Items} from "../../components/items/Items"

export default function Td() {
  return (
    <div>
      <h1 className="text-3xl pb-4">3D</h1>
      <Items dataArray={tdData} />
    </div>
  )
}
