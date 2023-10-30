import { SocialMedia } from "./social-media"
import { About } from "./about"
import { ProfilePicture } from "./profile-picture"
import { ScrollButtonIndicator } from "./scroll-button-indicator"

export const Hero = () => {
  return (
    <section
      className="pt-5 pb-24 lg:pb-5 lg:pt-28 grid grid-cols-[1fr] lg:grid-cols-[2rem_2fr_1fr] gap-10 lg:gap-6 justify-between items-center relative text-center lg:text-left"
    >
      <SocialMedia />
      <About />
      <ProfilePicture />
      <ScrollButtonIndicator />
    </section>
  )
}
