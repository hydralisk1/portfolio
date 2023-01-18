import Image from 'next/image'
import mannamPic from '@/public/assets/mannam.png'
import rockethoodPic from '@/public/assets/rockethood.png'
import itzyPic from '@/public/assets/itzy.png'
import styles from './projects.module.css'

export default function Projects() {
  const myProjects = [{
    name: 'Mannam - Inspired by Meetup',
    detail: 'Mannam is a Meetup cloning site. Mannam can be used for creating groups, creating events and attending other\'s events.\n\nThis application is powered by Google Maps API, Google Geocoding API. \n\nAs a side note, Mannam literally means MeetUp in Korean.',
    image: mannamPic,
    url: 'https://mannam.onrender.com',
  },{
    name: 'Rockethood | Comission-free Stock Trading & Investing App',
    detail: 'Rockethood is a website clone inspired by Robinhood. This project was created by Efrain, Ha, Joonil, and Kat from App Academy as a part of our coursework. Our project is a fully-functional web application that allows users to buy and sell stocks, track stocks performance,and bookmark the finance news using real-time market data. We built the application using Python and JavaScript, with the Flask framework for the backend and React/Redux for the frontend.',
    image: rockethoodPic,
    url: 'https://rockethood.onrender.com',
  },{
    name: 'Itzy - Full-stack e-commerce web application',
    detail: 'Itzy is a website clone inspired by Etsy. This project was created by Joonil from App Academy. This project is a fully-functional web application that allows users to buy and sell products. I built the application using Python and JavaScript, with the Flask framework for the backend and React/Redux for the frontend. I also used SQLAlchemy to handle our database interactions and Boto3 for AWS integration.',
    image: itzyPic,
    url: 'https://itzy.onrender.com',
  }]

  return (<>
    <div className={styles.container}>
      <div className={styles.projectsTag}>
        My Projects
      </div>
      <div className={styles.projectsContainer}>
        {myProjects.map((obj, i) => <a key={obj.url} href={obj.url} target='_blank'>
          <div key={obj.name + i} className={styles.projectContainer}>
            <div key={i} className={styles.projectImg}>
              <Image
                src={obj.image}
                alt={obj.name}
                fill
              />
            </div>
            <div key={obj.name} className={styles.projectTitle}>{obj.name}</div>
            <div key={obj.detail} className={styles.projectDetail}>{obj.detail}</div>
          </div>
        </a>)}
      </div>
    </div>
  </>)
}
