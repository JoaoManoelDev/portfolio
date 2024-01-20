import { routes } from "@/constants/nav-routes"

export const Navbar = () => {
  return (
    <nav className="hidden lg:flex lg:items-center gap-2">
      {routes.map(route => (
        <a
          href={route.href} 
          key={route.href}
          className='px-4 py-2'
        >
          {route.label}
        </a>
      ))}
    </nav>
  )
}