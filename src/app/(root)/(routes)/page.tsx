import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="container max-w-7xl lg:pt-20">
        <Hero />
      </main>
    </>
  )
}
