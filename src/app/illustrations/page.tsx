import {illustrationsData} from "../assests"
import {Items} from "../components/items/Items"

export default function Illustrations() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Illustrations</h1>
      <Items dataArray={illustrationsData} />
    </div>
  )
}
