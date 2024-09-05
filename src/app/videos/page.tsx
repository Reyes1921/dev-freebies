import {videoData} from "../assests"
import {Items} from "../components/items/Items"

export default function Videos() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Videos</h1>
      <Items dataArray={videoData} />
    </div>
  )
}
