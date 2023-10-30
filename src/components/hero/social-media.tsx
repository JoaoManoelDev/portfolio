import { Icons } from "@/components/icons"

export const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center gap-3 top-5 absolute lg:static">
      <a href="https://github.com/JoaoManoelDev" target="_blank">
        <Icons.gitHub className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>
      <a href="https://www.linkedin.com/in/joao-manoel-dev" target="_blank">
        <Icons.linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>
    </div>
  )
}
