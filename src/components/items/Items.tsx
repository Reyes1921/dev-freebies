import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {FaExternalLinkAlt} from "react-icons/fa"
import {Imgs} from "./Imgs"

interface arrayContent {
  color: string
  link: string
  id: number
  img: string
  name: string
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
          className="shadow-drop-center hover:scale-105 transition-all shadow-drop-center bg-accent dark:bg-card duration-500 border-2 dark:border-[1px] mb-2"
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
              <Imgs item={item} />
            </CardContent>
          </a>
        </Card>
      ))}
    </div>
  )
}
