import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from "@/components/ui/drawer"
import { Icons } from "@/components/icons"

import { routes } from "@/constants/nav-routes"

export const MobileNavbar = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <ThemeToggle />

      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon" className="w-9 h-9">
            <Icons.layoutGrid className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader className="text-2xl font-semibold mt-4">Menu</DrawerHeader>

          <nav className="grid grid-cols-3 gap-1 mb-1">
            {routes.map(route => (
              <DrawerClose key={route.href} asChild>
                <a href={route.href}>
                  <div className="flex flex-col items-center justify-center gap-1 h-24 text-muted-foreground">
                    <route.icon className="w-6 h-6" />
                    <span>{route.label}</span>
                  </div>
                </a>
              </DrawerClose>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
