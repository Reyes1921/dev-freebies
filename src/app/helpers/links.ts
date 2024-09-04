import {
  buttonData,
  colorData,
  componentData,
  fontData,
  gradientData,
  iconData,
  imageData,
} from "../assests"

export const links = () => {
  const menuLinks = [
    {
      name: "components",
      href: "component",
      icon: "LuToyBrick",
      number: componentData.length,
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
