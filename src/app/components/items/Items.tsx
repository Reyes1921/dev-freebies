import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {FaExternalLinkAlt} from "react-icons/fa"

interface arrayContent {
  id: number
  name: string
  img: string
  href: string
  color: string
}
export const Items = ({dataArray}: {dataArray: arrayContent[]}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row hover p-0 animated fadeInUp">
      {dataArray.map((item: arrayContent) => (
        <Card
          style={
            {
              "--color": item.color,
            } as React.CSSProperties
          }
          className="shadow-drop-center hover:scale-105 transition-all shadow-drop-center duration-500 bg-accent dark:bg-primary-foreground"
          key={item.name}
        >
          <Link href={item.href} target="_blank">
            <CardHeader className="p-4">
              <CardTitle className="text-sm md:text-base flex items-center justify-normal py-0 ">
                {item.name}
                <FaExternalLinkAlt className="pl-1" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center p-0">
              <Image
                src={item.img}
                alt={`Image of ${item.name}`}
                width={300}
                height={300}
                blurDataURL="h.png"
                placeholder="blur"
                className="object-contain w-full h-auto aspect-video"
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}
