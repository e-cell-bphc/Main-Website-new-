import React from 'react'
import styles from '../../styles/id/profile.module.css'
import { useState, useEffect } from 'react'
import launchpad from '../../assets/Launchpad.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function Profile() {
  const [userData, setUserData] = useState({
    name: 'Akshat Khaitan',
    email: 'f20202055@hyderabad.bits-pilani.ac.in',
    phone: '1234567890',
    college: 'BITS-HYDERABAD',
    year_of_study: '2nd Year',
    city: 'Hyderabad',
    resume: ''
  })

  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    console.log(session)
    console.log(status)
    if (session) {
      console.log('something', session)
      // return (
      //   <>
      //     Signed in as {session} <br />
      //     <button onClick={() => signOut()}>Sign out</button>
      //   </>
      // )
    } else {
      console.log('empty')
    }

    if (status === 'unauthenticated') {
      router.push('/id/portal')
    }
  }, [session, status])

  useEffect(() => {
    if (status === 'authenticated') {
    }
  }, [status])

  //   if (status === 'authenticated') {
  //     setSomething('sdjfbk')
  //   }

  return (
    <>
      <div className={styles.launchpad_logo}>
        <Image src={launchpad} alt="logout" />
      </div>
      <div className={styles.outer}>
        {/* <div className={styles.inner_left}>
                </div> */}
        <div className={styles.inner_right}>
          <div className={styles.inner_right_top}>Profile</div>
          <div className={styles.inner_right_bottom}>
            <div className={styles.user_form}>
              <div>
                <label className={styles.labels}>Name</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your name"
                  value={userData.name}
                />
              </div>
              <div>
                <label className={styles.labels}>Email</label>
                <input
                  className={styles.inputbox}
                  type="text"
                  placeholder="Enter your Email"
                  value={userData.email}
                />
              </div>
              <div>
                <label className={styles.labels}>Phone</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your Phone"
                  value={userData.phone}
                />
              </div>
              <div>
                <label className={styles.labels}>College</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your College"
                  value={userData.college}
                />
              </div>
              <div>
                <label className={styles.labels}>Year Of Study</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your College"
                  value={userData.year_of_study}
                />
              </div>
              <div>
                <label className={styles.labels}>City</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your College"
                  value={userData.city}
                />
              </div>
              <div>
                <label className={styles.labels}>Your Resume</label>
                <input
                  type="file"
                  className={styles.resume}
                  value={userData.resume}
                />
              </div>
              <div></div>
              <div>
                <button className={styles.submit}>Update</button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Profile
