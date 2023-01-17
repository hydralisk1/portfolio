import Image from 'next/image'
import styles from './myplace.module.css'
import bg from '@/public/assets/coding.jpg'
import profilePic from '@/public/assets/profile.jpg'

export default function MyPlace() {
  const bgStyle = {
    background: `url(${bg.src}) no-repeat center center fixed`,
    backgroundSize: 'auto cover',
  }

  return (<>
    <div
      style={bgStyle}
      className={styles.topContainer}
    >
      <div className={styles.imgContainer}>
        <div className={styles.greetings}>
          <div className={styles.profilePicContainer}>
            <Image
              src={profilePic}
              width={250}
              height={250}
              alt='Joonil profile picture'
              style={{
                borderRadius: '50%',
                marginRight: '1rem',
              }}
            />
          </div>
          <div className={styles.greetingContainer}>
            <span>Hello! 👋</span>
            <div style={{display: 'flex'}}>
              <p>I&apos;m</p>
              <section className={styles.animation}>
                <div className={styles.first}><div>Joonil Kim</div></div>
                <div className={styles.second}><div>Frontend Developer</div></div>
                <div className={styles.third}><div>Backend Developer</div></div>
                <div className={styles.forth}><div>Full-Stack Developer</div></div>
              </section>
            </div>
            <button className={styles.btn}>Find out my skills</button>
          </div>
        </div>
      </div>
    </div>
  </>)
}
