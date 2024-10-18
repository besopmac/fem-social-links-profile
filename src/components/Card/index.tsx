type Props = {
  children: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-6 bg-grey-800 p-6 sm:p-10 rounded-xl w-full max-w-[327px] sm:max-w-[456px] md:max-w-[384px]">
      {children}
    </div>
  )
}

export default Card