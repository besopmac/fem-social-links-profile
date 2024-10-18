type Props = {
  name: string
  avatar: string
  profile: string
  location: string
}

const Profile = ({ name, avatar, profile, location }: Props) => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center'>
      <img src={avatar} alt={name} className="rounded-full w-22 h-22" />
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-xxs font-bold text-lime-350">{location}</h2>
      </div>
      <p className="text-xxs leading-6">"{profile}"</p>
    </div>
  )
}

export default Profile