import {toolData} from "../../data"
import {Items} from "../../components/items/Items"

export default function Tools() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Tools</h1>
      <Items dataArray={toolData} />
    </div>
  )
}
