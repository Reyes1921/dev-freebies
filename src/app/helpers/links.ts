import colorData from "../assests/colors/color"

export const links = () => {
  const menuLinks = [
    {
      name: "components",
      href: "component",
      icon: "LuToyBrick",
    },
    {name: "buttons", href: "buttons", icon: "IoIosRadioButtonOn"},
    {name: "icons", href: "icons", icon: "FaCheck"},
    {name: "fonts", href: "fonts", icon: "AiOutlineFontSize"},
    {
      name: "colors",
      href: "colors",
      icon: "AiOutlineBgColors",
      number: colorData.length,
    },
    {name: "images", href: "images", icon: "PiImageSquareBold"},
    {name: "gradients", href: "gradients", icon: "MdGradient"},
  ]

  return {menuLinks}
}
