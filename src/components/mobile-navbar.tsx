import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Icons } from "@/components/icons"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"
import { routes } from "@/constants/nav-routes"

export const MobileNavbar = () => {
  return (
    <div className="lg:hidden flex justify-center items-center gap-3">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="w-9 h-9">
            <Icons.layoutGrid className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>

        <SheetContent side="bottom">
          <SheetHeader className="pt-2 sm:text-center">Menu</SheetHeader>

          <nav className="grid grid-cols-3 mt-4 gap-1">
            {routes.map(route => (
              <SheetClose key={route.href} asChild>
                <a href={route.href}>
                  <div className="flex flex-col items-center justify-center gap-1 h-24 text-muted-foreground">
                    <route.icon className="w-6 h-6" />
                    <span>{route.label}</span>
                  </div>
                </a>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}