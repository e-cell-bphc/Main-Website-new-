import React from 'react'
import styles from '../../styles/id/profile.module.css'
import { useState, useEffect } from 'react'
import launchpad from '../../assets/launchpad.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
function Profile() {
  const { data: session, status } = useSession()//
  const [userData, setUserData] = useState({
    name: '',
    email: 'f20202055@hyderabad.bits-pilani.ac.in',//comment this out
    // email: session.user.email, //uncomment after api active
    phone: '',
    college: '',
    year_of_study: '',
    city: '',
    resume: ''
  })

  //   const [something, setSomething] = useState('')

  
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
  }, [session, status])

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
          <div className={styles.inner_right_top}>
            {status == 'authenticated' ? 'Your auth Profile' : 'Go away'}{/*change these messages later*/}
          </div>
          <div className={styles.inner_right_bottom}>
            <div className={styles.user_form}>
              <div>
                <label className={styles.labels}>Name</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your name"
                  onChange={(e)=>{
                    setUserData({...userData,name:e.target.value})
                  }}
                  value={userData.name}
                />
              </div>
              <div>
                <label className={styles.labels}>Email</label>
                <input
                  className={styles.inputbox}
                  type="text"
                  placeholder="Enter your email"
                  value={userData.email}
                />
              </div>
              <div>
                <label className={styles.labels}>Phone</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your phone"
                  onChange={(e)=>{
                    setUserData({...userData,phone:e.target.value})
                  }}
                  value={userData.phone}
                />
              </div>
              <div>
                <label className={styles.labels}>College</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your college"
                  onChange={(e)=>{
                    setUserData({...userData,college:e.target.value})
                  }}
                  value={userData.college}
                />
              </div>
              <div>
                <label className={styles.labels}>Year Of Study</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your year of study"
                  onChange={(e)=>{
                    setUserData({...userData,year_of_study:e.target.value})
                  }}
                  value={userData.year_of_study}
                />
              </div>
              <div>
                <label className={styles.labels}>City</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your city"
                  onChange={(e)=>{
                    setUserData({...userData,city:e.target.value})
                  }}
                  value={userData.city}
                />
              </div>
              <div>
                <label className={styles.labels}>Your Resume</label>
                <input
                  type="file"
                  className={styles.resume}
                  onChange={(e)=>{
                    setUserData({...userData,resume:e.target.value})
                  }}
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
