import Button from "./components/Button"
import Card from "./components/Card"
import Container from "./components/Container"
import Profile from "./components/Profile"

import avatar from "./assets/images/avatar-jessica.jpeg"

const LINKS = [
  {
    href: "https://github.com",
    title: "GitHub",
  },
  {
    href: "https://www.frontendmentor.io",
    title: "Frontend Mentor",
  },
  {
    href: "https://www.linkedin.com/in/besopmac",
    title: "LinkedIn",
  },
  {
    href: "https://twitter.com/besop_mac",
    title: "Twitter",
  },
  {
    href: "",
    title: "Instagram",
  },
]

function App() {
  return (
    <Container>
      <Card>
        <Profile
          avatar={avatar}
          name="Jessica Randall"
          profile="Front-end developer and avid reader."
          location="London, United Kingdom"
        />

        <div className="flex flex-col gap-4">
          {LINKS.map((link) => (
            <Button key={link.title} url={link.href} name={link.title} />
          ))}
        </div>
      </Card>
    </Container>
  )
}

export default App
