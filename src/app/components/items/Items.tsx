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
import {FaExternalLinkAlt} from "react-icons/fa"

interface dataArray {
  name: string
  img: string
  href: string
  color: string
}
export const Items = ({colorData}: any) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 grid-flow-row hover">
      {colorData.map((item: dataArray) => (
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
              <CardTitle className="text-base md:text-lg flex items-center">
                {item.name}
                <FaExternalLinkAlt className="pl-1" />
              </CardTitle>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image
                src={item.img}
                alt={`Image of ${item.name}`}
                width={200}
                height={200}
                className="object-cover"
              />
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}
