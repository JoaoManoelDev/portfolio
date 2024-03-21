import { CardProject } from "@/components/card-project"
import { projects } from "@/constants/projects"

export const Projects = () => {
  return (
    <section id="projects" className="lg:py-12" >
      <div className="flex flex-col justify-center mx-auto lg:mx-0 gap-y-5">
        <h1 className="text-2xl lg:text-4xl font-bold flex flex-col tracking-tighter text-center lg:text-start">
          Projetos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 min-w-full gap-2 ">
          {projects.map(project => (
            <div className="m-0 w-full flex justify-center lg:justify-between">
              <CardProject key={project.id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  ) 
} 
