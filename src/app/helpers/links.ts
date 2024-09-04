import buttonData from "../assests/buttons/buttons"
import colorData from "../assests/colors/color"
import componentsData from "../assests/components/components"
import fontData from "../assests/fonts/fonts"
import gradientData from "../assests/gradients/gradients"
import iconData from "../assests/icons/icons"
import imageData from "../assests/images/images"

export const links = () => {
  const menuLinks = [
    {
      name: "components",
      href: "component",
      icon: "LuToyBrick",
      number: componentsData.length,
    },
    {
      name: "buttons",
      href: "buttons",
      icon: "IoIosRadioButtonOn",
      number: buttonData.length,
    },
    {name: "icons", href: "icons", icon: "FaCheck", number: iconData.length},
    {
      name: "fonts",
      href: "fonts",
      icon: "AiOutlineFontSize",
      number: fontData.length,
    },
    {
      name: "colors",
      href: "colors",
      icon: "AiOutlineBgColors",
      number: colorData.length,
    },
    {
      name: "images",
      href: "images",
      icon: "PiImageSquareBold",
      number: imageData.length,
    },
    {
      name: "gradients",
      href: "gradients",
      icon: "MdGradient",
      number: gradientData.length,
    },
  ]

  return {menuLinks}
}
