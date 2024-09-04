import imageData from "../assests/images/images"
import {Items} from "../components/items/Items"

export default function Images() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Images</h1>
      <Items dataArray={imageData} />
    </div>
  )
}
