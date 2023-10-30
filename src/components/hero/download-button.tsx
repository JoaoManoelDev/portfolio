import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

export const DownloadButton = () => {
  return (
    <a
      href="#"
      className={cn(buttonVariants(), 'w-44 mx-auto lg:ml-0 flex gap-2')}
      download="/cv.pdf"
    >
      <Icons.fileUp className="w-5 h-5" />
      Download CV
    </a>
  )
}