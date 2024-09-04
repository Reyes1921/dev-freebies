import {buttonData} from "../assests"
import {Items} from "../components/items/Items"

export default function Buttons() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Buttons</h1>
      <Items dataArray={buttonData} />
    </div>
  )
}
