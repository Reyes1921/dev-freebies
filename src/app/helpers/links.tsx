import {
  animationData,
  buttonData,
  colorData,
  componentData,
  fontData,
  gradientData,
  iconData,
  illustrationsData,
  imageData,
  tdData,
  toolData,
  videoData,
} from "../assests"

import {IoColorPalette} from "react-icons/io5"
import {AiOutlineFontSize} from "react-icons/ai"
import {BsBadge3dFill} from "react-icons/bs"
import {FaCheck} from "react-icons/fa6"
import {FaPaintBrush} from "react-icons/fa"
import {FaTools} from "react-icons/fa"
import {FaVideo} from "react-icons/fa"
import {IoIosRadioButtonOn} from "react-icons/io"
import {LuToyBrick} from "react-icons/lu"
import {MdAnimation} from "react-icons/md"
import {MdGradient} from "react-icons/md"
import {PiImageSquareBold} from "react-icons/pi"

export const links = () => {
  const menuLinks = [
    {
      name: "3D",
      href: "3d",
      icon: <BsBadge3dFill />,
      number: tdData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "animations",
      href: "animations",
      icon: <MdAnimation />,
      number: animationData.length,
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
      name: "colors",
      href: "colors",
      icon: <IoColorPalette />,
      number: colorData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "components",
      href: "component",
      icon: <LuToyBrick />,
      number: componentData.length,
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
      name: "gradients",
      href: "gradients",
      icon: <MdGradient />,
      number: gradientData.length,
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
      name: "illustrations",
      href: "illustrations",
      icon: <FaPaintBrush />,
      number: illustrationsData.length,
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
      name: "tools",
      href: "tools",
      icon: <FaTools />,
      number: toolData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
    {
      name: "videos",
      href: "videos",
      icon: <FaVideo />,
      number: videoData.length,
      description: "Description Test",
      image: "/components/aceternity.webp",
    },
  ]

  return {menuLinks}
}
