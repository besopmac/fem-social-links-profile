type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <section className="w-full h-screen flex justify-center items-start border-white border-4">
      {children}
    </section>
  )
}

export default Container