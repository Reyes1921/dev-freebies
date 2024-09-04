import {componentData} from "../assests"
import {Items} from "../components/items/Items"

export default function Component() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Components</h1>
      <Items dataArray={componentData} />
    </div>
  )
}
