"use client"

import Image from "next/image"
import {useState} from "react"

interface itemContent {
  img: string
  name: string
}

export const Imgs = ({item}: {item: itemContent}) => {
  const [loading, setLoading] = useState(true)

  const imageLoading = () => {
    setLoading(false)
  }

  return (
    <Image
      src={item.img}
      alt={`Image of ${item.name}`}
      width={300}
      height={300}
      blurDataURL="/logo.svg"
      placeholder="blur"
      onLoad={imageLoading}
      loading="lazy"
      unoptimized
      onError={() => {
        console.error(`Failed to load image: ${item.img}`)
        setLoading(false)
      }}
      className={`object-fill w-full border-black aspect-[16/9] rounded-b-lg ${
        loading ? "blur" : "remove-blur"
      }`}
    />
  )
}
