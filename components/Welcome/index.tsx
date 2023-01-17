import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './welcome.module.css'

export default function Welcome() {
  const [progress, setProgress] = useState(0)
  const [tvClass, setTvClass] = useState(styles.tv)
  const [turnedOff, setTurnedOff] = useState(false)
  const router = useRouter()

  const turnOff = () => {
    setTurnedOff(true)
      setTvClass(`${styles.tv} ${styles.turningOff}`)
      setTimeout(() => {
        setTvClass(`${styles.tv} ${styles.turningOff} ${styles.turnedOff}`)
        setTimeout(() => {
          setTvClass(`${styles.tv} ${styles.turningOff} ${styles.turnedOff} ${styles.turnedOut}`)
          setTimeout(() => router.push('/myplace'), 300)
        }, 300)
      })
  }

  useEffect(() => {
    if(progress < 2){
      setTimeout(() => setProgress(progress + 1), 3000)
    }else if(!turnedOff) setTimeout(turnOff, 1000)
  }, [progress])

  return (
    <>
      <button
        className={styles.skipBtn}
        onClick={turnOff}
      >Skip Intro</button>
      <div className={styles.welcomeContainer}>
        <div className={tvClass}>
          {!turnedOff && <>
            <div>
              <div className={styles.helloWorld}>Hello World!</div>
            </div>
            {
              progress > 0 &&
              <div>
                <div className={styles.welcomeTyping}>Welcome to Joonil's Place</div>
              </div>
            }
        </>}
        </div>
      </div>
    </>)
}
