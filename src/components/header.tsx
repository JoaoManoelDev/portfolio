import { Navbar } from "@/components/navbar"
import { MobileNavbar } from "@/components/mobile-navbar"

export const Header = () => {
  return (
    <header
      className="
        container max-w-7xl w-full flex justify-between items-center h-16 lg:h-20 fixed z-10 right-0 bottom-0 left-0 border-t bg-background lg:top-0 lg:border-0
      "
    >
      <a href="#" className="text-2xl font-bold">
        {"<João />"}
      </a>

      <Navbar />
      <MobileNavbar />
    </header>
  )
}
