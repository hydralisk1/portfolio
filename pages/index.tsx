import Head from "next/head"
import Welcome from "@/components/Welcome"

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>Hi! I&apos;m Joonil</title>
      </Head>
      <Welcome />
    </>
  )
}
