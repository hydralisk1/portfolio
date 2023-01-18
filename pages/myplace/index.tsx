import About from "./about"
import Skills from "./skills"
import Detail from "./detail"
import Projects from "./projects"
import Contacts from "./contacts"
import Head from "next/head"

export default function MyPlace() {
  return (<>
    <Head>
      <script src="https://kit.fontawesome.com/40069747e9.js" crossOrigin="anonymous"></script>
    </Head>
    <About />
    <Detail />
    <Skills />
    <Projects />
    <Contacts />
  </>)
}
