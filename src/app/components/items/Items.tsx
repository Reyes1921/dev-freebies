import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
import {FaExternalLinkAlt} from "react-icons/fa"

interface arrayContent {
  name: string
  img: string
  href: string
  tags?: string[]
  color: string
}
export const Items = ({dataArray}: {dataArray: arrayContent[]}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 grid-flow-row hover p-0">
      {dataArray.map((item: arrayContent) => (
        <Card
          style={
            {
              "--color": item.color,
            } as React.CSSProperties
          }
          className="min-w-[150px] shadow-drop-center hover:scale-105 transition-all shadow-drop-center duration-500"
          key={item.name}
        >
          <Link href={item.href} target="_blank">
            <CardHeader>
              <CardTitle className="text-sm md:text-base flex items-center">
                {item.name}
                <FaExternalLinkAlt className="pl-1" />
              </CardTitle>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </CardHeader>
            <CardContent className="flex justify-center items-center p-0">
              <Image
                src={item.img}
                alt={`Image of ${item.name}`}
                width={300}
                height={200}
                blurDataURL="h.png"
                placeholder="blur"
                className="object-fill max-w-300 max-h-200"
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}
