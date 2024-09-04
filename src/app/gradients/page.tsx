import gradientData from "../assests/gradients/gradients"
import {Items} from "../components/items/Items"

export default function Gradients() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Gradients</h1>
      <Items dataArray={gradientData} />
    </div>
  )
}
