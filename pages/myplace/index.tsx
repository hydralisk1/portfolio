import About from "./about"
import Skills from "./skills"
import Detail from "./detail"
import Projects from "./projects"
import Contacts from "./contacts"
import Script from "next/script"

export default function MyPlace() {
  return (<>
    <Script src="https://kit.fontawesome.com/40069747e9.js" crossOrigin="anonymous"></Script>
    <About />
    <Detail />
    <Skills />
    <Projects />
    <Contacts />
  </>)
}
