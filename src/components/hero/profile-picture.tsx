import Image from "next/image"

export const ProfilePicture = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/profile.png"
        alt="profile picture"
        height={400}
        width={400}
        className="border-4 rounded-full"
        priority
      />
    </div>
  )
}