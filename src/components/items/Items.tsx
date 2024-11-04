"use client"

import Image from "next/image"
import {useState} from "react"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {FaExternalLinkAlt} from "react-icons/fa"

interface arrayContent {
  color: string
  link: string
  id: number
  img: string
  name: string
}
export const Items = ({dataArray}: {dataArray: arrayContent[]}) => {
  const [loading, setLoading] = useState(true)

  const imageLoading = () => {
    setLoading(false)
  }
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row hover p-0 animated scale-up-top">
      {dataArray.map((item: arrayContent) => (
        <Card
          style={
            {
              "--color": item.color,
            } as React.CSSProperties
          }
          className="group transition-all shadow-drop-center bg-accent dark:bg-card duration-500 border-2 dark:border-2 overflow-hidden mb-2"
          key={item.name}
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <CardHeader className="p-4">
              <CardTitle className="text-sm md:text-base flex items-center justify-normal py-0 ">
                {item.name}
                <FaExternalLinkAlt className="pl-1" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center p-0 aspect-video">
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
                className={`object-fill w-full border-black aspect-[16/9] rounded-b-lg ease-in-out  transition-all duration-500 group-hover:scale-110 ${
                  loading ? "blur" : "remove-blur"
                }`}
              />
            </CardContent>
          </a>
        </Card>
      ))}
    </div>
  )
}
