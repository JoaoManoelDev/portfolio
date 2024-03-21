import {
  Card,
  CardContent,

  CardFooter,

} from "@/components/ui/card"
import Image from "next/image"

interface Image {
  name: string
  url: string
}

interface CardProps {
  project: {
    title: string,
    description: string
    technologies: string[]
    images: Image[]
  }
}

export const CardProject = ({
  project
}:CardProps) => {
  return (
    <Card className="max-w-96">
      <CardContent className="p-0 pb-2">
        <Image
          src={project.images[0].url}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-44 md:h-52 lg:h-56 rounded-lg object-cover"
          style={{ objectFit: "cover" }}
          alt={project.title}
        />


      </CardContent>
      <CardFooter className="flex-col items-start gap-y-2">
        <p className="text-xl font-bold">{project.title}</p>
        <p>{project.description}</p>
      </CardFooter>
    </Card>
  )
}
