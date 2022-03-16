import React from 'react'
import styles from '../../styles/realnav.module.css'
import Image from 'next/image'
import Navbar from '../navbar'
import logout from '../../assets/power-off.png'
import launchpad from '../../assets/Launchpad.png'

function RealNav() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Left}>
          <Image src={logout} alt="logout" width={30} height={30} />
        </div>
        <div className={styles.Center}>Internship Drive</div>
        <div className={styles.Right}>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default RealNav
