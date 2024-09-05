import {
  buttonData,
  colorData,
  componentData,
  fontData,
  gradientData,
  iconData,
  imageData,
} from "../assests"

import {AiOutlineBgColors} from "react-icons/ai"
import {AiOutlineFontSize} from "react-icons/ai"
import {FaCheck} from "react-icons/fa6"
import {IoIosRadioButtonOn} from "react-icons/io"
import {LuToyBrick} from "react-icons/lu"
import {MdGradient} from "react-icons/md"
import {PiImageSquareBold} from "react-icons/pi"

export const links = () => {
  const menuLinks = [
    {
      name: "components",
      href: "component",
      icon: <LuToyBrick />,
      number: componentData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "buttons",
      href: "buttons",
      icon: <IoIosRadioButtonOn />,
      number: buttonData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "icons",
      href: "icons",
      icon: <FaCheck />,
      number: iconData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "fonts",
      href: "fonts",
      icon: <AiOutlineFontSize />,
      number: fontData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "colors",
      href: "colors",
      icon: <AiOutlineBgColors />,
      number: colorData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "images",
      href: "images",
      icon: <PiImageSquareBold />,
      number: imageData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "gradients",
      href: "gradients",
      icon: <MdGradient />,
      number: gradientData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
  ]

  return {menuLinks}
}
