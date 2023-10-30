import { DownloadButton } from "@/components/hero/download-button"

export const About = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-3xl order-1 lg:order-none">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold flex flex-col ">
          Olá Mundo,
          <span className="text-5xl">Meu nome é João</span>
        </h1>
        <h2 className="font-semibold">Desenvolvedor Front End e Back End</h2>
      </div>

      <p className="leading-relaxed lg:max-w-xl">
        Sou um programador motivado e versátil, sempre disposto a enfrentar novos desafios. Com paixão por aprender, me dedico 
        a entregar resultados de alta qualidade. Com uma atitude positiva e uma mentalidade de progresso, estou pronto para dar 
        uma contribuição significativa e alcançar grandes feitos.
      </p>

      <DownloadButton />
    </div>
  )
}