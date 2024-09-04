import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface dataArray {
  id: number
  name: string
  img: string
  link: string
  tags: string[]
}
export const Items = ({colorData}: any) => {
  return (
    <div className="flex flex-wrap ">
      {colorData.map((item: dataArray) => (
        <Card className="w-[350px]" key={item.name}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={item.img}
              alt={`Image of ${item.name}`}
              width={200}
              height={200}
              className="invert"
            />
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      ))}
    </div>
  )
}
