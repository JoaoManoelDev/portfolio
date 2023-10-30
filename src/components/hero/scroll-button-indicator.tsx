import { Icons } from "@/components/icons"

export const ScrollButtonIndicator = () => {
  return (
    <a href="#about" className="gap-1 items-center row-start-3 col-start-2 col-span-2 hidden lg:flex">
      <Icons.mouse className="w-5 h-5" />
      <span>Role para baixo</span>
      <Icons.arrowDown className="w-5 h-5" />
    </a>
  )
}