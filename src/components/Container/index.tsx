type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      {children}
    </section>
  )
}

export default Container