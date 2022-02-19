import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/id/home.module.css'
import Social from '../../components/id/social'
import Scroll from '../../components/id/scroll'
import StatsCounter from '../../components/id/statsCounter'
import CompCards from '../../components/id/comCards'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'



export default function Home() {
  const [playing, setPlaying] = useState(true);
  
  useEffect(() => {
    function videoplay() {

      setPlaying(true);
    }
   setTimeout(videoplay, 7)
  },[])



  return (
    <>
      <div className={styles.portal}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.line1}></div>
            <div className={styles.heading}>
              <div className={styles.welcome}>Welcome</div>
              <div className={styles.internship}>Internship Drive</div>
              <div className={styles.quote}>
                lorem ipsum internship drive is an amazing event for you all
                guys{" "}
              </div>
            </div>
            <div className={styles.line2}></div>
          </div>
          <div className={styles.video}>
            <ReactPlayer
              playing={false}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="100%"
              controls={false}
            />
          </div>
        </div>
        <div>
          <Social />
          <Scroll />
          <div className={styles.AboutUs}>
            <div className={styles.AboutHeader}>About</div>
            <div className={styles.About}>
              “The pebbles of knowledge must be bonded together by the cement of
              experience.” With our Internship Drive, seize the opportunity to
              get hands-on industry experience in a plethora of sectors. Having
              successfully connected over 350 selects out of 1000+ applicants
              with various companies, the Internship Drive conducted as a part
              of Launchpad 2021 was a triumph. As always, we aim to connect
              skilled and enthusiastic interns with numerous companies and
              start-ups, on a larger scale than ever before! Participate in the
              fourth edition of Launchpad’s Internship Drive to get an exclusive
              chance to find your ideal internship.
            </div>
          </div>
          <div className={styles.stats}>
            <StatsCounter start={0} end={50} info="Startups" />
            <StatsCounter start={14000} end={30000} info="Stipend" />
            <StatsCounter start={50} end={100} info="Interns Converted" />
            <StatsCounter start={1500} end={3000} info="Applications" />
          </div>
          <div className={styles.Companies}>
            <div className={styles.CompanyHeader}>Past Companies</div>
            <div className={styles.CompanyCards}>
              <CompCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
