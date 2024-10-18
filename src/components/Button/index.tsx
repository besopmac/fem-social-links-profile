type Props = {
  url: string
  name: string
}

const Button = ({ url, name }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      className="w-full rounded-lg text-center text-xxs font-bold leading-[45px] bg-grey-700 hover:bg-lime-350 hover:text-grey-700 transition-colors duration-200 ease-in"
    >
      {name}
    </a>
  )
}

export default Button