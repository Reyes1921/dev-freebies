import {animationData} from "../../data"
import {Items} from "../../components/items/Items"

export default function Animations() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Animations</h1>
      <Items dataArray={animationData} />
    </div>
  )
}
