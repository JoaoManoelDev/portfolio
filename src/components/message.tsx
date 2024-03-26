import { ConstructionIcon } from "lucide-react"

export const Message = () => {
  return (
    <div className="z-20 fixed right-0 top-0 left-0 flex justify-center gap-2 bg-yellow-500">
      <ConstructionIcon className="w-5 h-5" />
      <p>Portfólio em construção...</p>
    </div>
  )
}