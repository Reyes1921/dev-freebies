"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
import {FaExternalLinkAlt} from "react-icons/fa"

interface arrayContent {
  color: string
  href: string
  id: number
  img: string
  name: string
}
export const Items = ({dataArray}: {dataArray: arrayContent[]}) => {
  const [loading, setLoading] = useState(true)

  const imageLoading = () => {
    setLoading(false)
    console.log(dataArray)
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row hover p-0 animated fadeInUp">
      {dataArray.map((item: arrayContent) => (
        <Card
          style={
            {
              "--color": item.color,
            } as React.CSSProperties
          }
          className="shadow-drop-center hover:scale-105 transition-all shadow-drop-center bg-accent dark:bg-card duration-500 border-2 dark:border-[1px]"
          key={item.name}
        >
          <Link href={item.href} target="_blank">
            <CardHeader className="p-4">
              <CardTitle className="text-sm md:text-base flex items-center justify-normal py-0 ">
                {item.name}
                <FaExternalLinkAlt className="pl-1" />
              </CardTitle>
            </CardHeader>
            {/* <div className="loader flex justify-center items-center"></div> */}
            <CardContent className="flex justify-center items-center p-0 aspect-video">
              {loading ? (
                <div className="loader flex justify-center items-center"></div>
              ) : (
                <Image
                  src={item.img}
                  alt={`Image of ${item.name}`}
                  width={300}
                  height={300}
                  blurDataURL="/logo.svg"
                  placeholder="blur"
                  onLoad={imageLoading}
                  loading="lazy"
                  onError={() => {
                    console.error(`Failed to load image: ${item.img}`)
                    setLoading(false) // Set loading to false even if the image fails to load
                  }}
                  className="object-contain w-full h-auto aspect-video"
                />
              )}
            </CardContent>
            <CardFooter></CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}
