import {iconData} from "../../data"
import {Items} from "../../components/items/Items"

export default function Icons() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Icons</h1>
      <Items dataArray={iconData} />
    </div>
  )
}
