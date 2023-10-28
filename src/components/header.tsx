import { Navbar } from "@/components/navbar"

export const Header = () => {
  return (
    <header
      className="
        container max-w-7xl flex justify-between items-center h-20 fixed right-0 bottom-0 left-0 border-t lg:top-0 lg:border-b
      "
    >
      <a href="#" className="text-2xl font-bold">
        {"<João />"}
      </a>

      <Navbar />
    </header>
  )
}