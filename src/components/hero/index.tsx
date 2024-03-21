import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"

export const Hero = () => {
  return (
    <section id="home" className="py-12 md:h-[84vh] xl:pt-28">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-x-8">
        <div className="max-w-[600px] flex flex-col justify-center gap-y-4 mx-auto lg:mx-0">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold flex flex-col tracking-tighter text-center lg:text-start">
              Olá Mundo,
              <span className="text-3xl lg:text-6xl tracking-tighter text-center lg:text-start">Meu nome é João</span>
            </h1>
            <h2 className="font-semibold uppercase text-center lg:text-start">Desenvolvedor Front End e Back End</h2>
          </div>
          
          <p className="leading-relaxed lg:max-w-xl text-center lg:text-start text-muted-foreground font-light">
            Sou um programador motivado e versátil, sempre disposto a enfrentar novos desafios. Com paixão por aprender, me dedico 
            a entregar resultados de alta qualidade. Com uma atitude positiva e uma mentalidade de progresso, estou pronto para dar 
            uma contribuição significativa e alcançar grandes feitos.
          </p>

          <div>
            <Link href="/contact">
              <Button>Contato</Button>
            </Link>
          </div>
        </div>

        <div className="w-[260px] h-[260px] lg:w-[400px] lg:h-[400px]">
          <Image
            src="/profile.png"
            alt="profile picture"
            height={400}
            width={400}
            className="border-4 rounded-full"
            priority
          />
        </div>
      </div>

      <div className="hidden lg:flex absolute left-2/4 bottom-20 xl:bottom-12 animate-bounce"> 
        <Icons.chevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
