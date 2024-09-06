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

import {AiOutlineFontSize} from "react-icons/ai"
import {BsBadge3dFill} from "react-icons/bs"
import {FaCheck} from "react-icons/fa6"
import {FaPaintBrush} from "react-icons/fa"
import {FaTools} from "react-icons/fa"
import {FaVideo} from "react-icons/fa"
import {IoColorPalette} from "react-icons/io5"
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
      description:
        "Dive into the world of three-dimensional design and discover techniques, software, and inspiration for creating stunning visuals.",
      image: "/components/aceternity.webp",
    },
    {
      name: "animations",
      href: "animations",
      icon: <MdAnimation />,
      number: animationData.length,
      description:
        "Discover the art of motion and explore resources for creating captivating animations for your projects.",
      image: "/components/aceternity.webp",
    },
    {
      name: "buttons",
      href: "buttons",
      icon: <IoIosRadioButtonOn />,
      number: buttonData.length,
      description:
        "Learn about the design and functionality of buttons and find inspiration for your projects.",
      image: "/components/aceternity.webp",
    },
    {
      name: "colors",
      href: "colors",
      icon: <IoColorPalette />,
      number: colorData.length,
      description:
        "Dive into the psychology of color and how it can impact your designs. Discover color palettes, theory, and accessibility guidelines.",
      image: "/components/aceternity.webp",
    },
    {
      name: "components",
      href: "component",
      icon: <LuToyBrick />,
      number: componentData.length,
      description:
        "Explore essential UI components and learn how to use them effectively in your designs.",
      image: "/components/aceternity.webp",
    },
    {
      name: "fonts",
      href: "fonts",
      icon: <AiOutlineFontSize />,
      number: fontData.length,
      description:
        "Discover the world of typography and find resources for selecting, pairing, and using fonts in your projects.",
      image: "/components/aceternity.webp",
    },
    {
      name: "gradients",
      href: "gradients",
      icon: <MdGradient />,
      number: gradientData.length,
      description:
        "Learn about the art of gradients and how to use them to create visually appealing designs.",
      image: "/components/aceternity.webp",
    },
    {
      name: "icons",
      href: "icons",
      icon: <FaCheck />,
      number: iconData.length,
      description:
        "Explore the world of icons and find resources for free and premium icon libraries.",
      image: "/components/aceternity.webp",
    },
    {
      name: "illustrations",
      href: "illustrations",
      icon: <FaPaintBrush />,
      number: illustrationsData.length,
      description:
        "Discover the power of illustrations and find inspiration for your projects.",
      image: "/components/aceternity.webp",
    },
    {
      name: "images",
      href: "images",
      icon: <PiImageSquareBold />,
      number: imageData.length,
      description:
        "Learn about image optimization, formats, and best practices for web design.",
      image: "/components/aceternity.webp",
    },
    {
      name: "tools",
      href: "tools",
      icon: <FaTools />,
      number: toolData.length,
      description:
        "Discover a variety of design tools to enhance your workflow and productivity.",
      image: "/components/aceternity.webp",
    },
    {
      name: "videos",
      href: "videos",
      icon: <FaVideo />,
      number: videoData.length,
      description:
        "Explore the world of video content and learn about video production, editing, and marketing.",
      image: "/components/aceternity.webp",
    },
  ]

  return {menuLinks}
}
