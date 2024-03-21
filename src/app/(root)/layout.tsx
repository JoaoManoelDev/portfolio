import { Header } from "@/components/header"

interface RootLayoutProps {
  children: React.ReactNode
}

const RoutesLayout = ({
  children
}: RootLayoutProps) => {
  return (
    <div>
      <Header />

      {children}
    </div>
  )
}

export default RoutesLayout