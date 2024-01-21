import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"

export const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
        
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-x-8 border-green-500">
        <div className="max-w-[600px] flex flex-col justify-center gap-y-4 mx-auto lg:mx-0">
          <div>
            <h1 className="text-2xl font-bold flex flex-col tracking-tighter text-center lg:text-start">
              Olá Mundo,
              <span className="text-6xl tracking-tighter text-center lg:text-start">Meu nome é João</span>
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

        <div className="w-[400px] h-[400px]">
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
