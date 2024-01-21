import { Header } from "@/components/header"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({
  children
}: RootLayoutProps) => {
  return (
    <div>
      <Header />

      {children}
    </div>
  )
}

export default RootLayout