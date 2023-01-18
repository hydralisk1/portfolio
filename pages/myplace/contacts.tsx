import styles from './contacts.module.css'

export default function Contacts() {
  const style = {
    color: 'white',
    fontSize: '80px',
    marginRight: '2rem'
  }

  return (
    <div className={styles.container}>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsTag}>You can contact me at</div>
        <div className={styles.contacts}>
          <a href='https://www.linkedin.com/in/joonil-kim-hello/' target='_blank' rel="noreferrer">
            <i style={style} className="fa-brands fa-linkedin"></i>
          </a>
          <a href='https://github.com/hydralisk1' target='_blank' rel="noreferrer">
            <i style={style} className="fa-brands fa-square-github"></i>
          </a>
          <a href='mailto:bartholomaeuskim@gmail.com'>
            <i style={style} className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
