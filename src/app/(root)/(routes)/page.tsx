import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"

const Home = () => {
  return (
    <>
      <main className="container max-w-7xl px-4 lg:px-8 lg:pt-20 ">
        <Hero />
        <Projects />
      </main>
    </>
  )
}

export default Home