import styles from './skills.module.css'

export default function Skills () {
  interface Skills {
    frontEnd: string[]
    backEnd: string[]
  }

  const mySkills: Skills = {
    frontEnd: [
      'ReactJS',
      'Redux',
      'Javascript',
      'Typescript',
      'NextJS',
      'HTML/CSS etc'
    ],
    backEnd: [
      'PostgreSQL',
      'ExpressJS',
      'Python Flask',
      'SQLAlchemy',
      'Sequelize'
    ]
  }

  return (<>
    <div className={styles.container}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillContainer}>
          <div className={styles.title}>Frontend</div>
          <ul className={styles.skills}>
            {mySkills.frontEnd.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div id='skills' className={styles.skillContainer}>
          <div className={styles.title}>Backend</div>
          <ul className={styles.skills}>
            {mySkills.backEnd.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </>)
}
