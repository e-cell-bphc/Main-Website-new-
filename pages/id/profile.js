import React from 'react'
import styles from '../../styles/id/profile.module.css'
import { useState, useEffect } from 'react'
import launchpad from '../../assets/Launchpad.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'

function Profile() {
  const { data: session, status } = useSession()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    college: '',
    yos: '',
    resumeURL: ''
  })

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

    if (status === 'authenticated') {
      axios
        .get(
          `https://backend-api-2022.onrender.com/api/users/${session.user._id}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`
            }
          }
        )
        .then((res) => {
          setUserData({
            ...userData,
            name: res.data.data.name,
            email: res.data.data.email,
            phoneNumber: res.data.data.phoneNumber,
            college: res.data.data.college,
            yos: res.data.data.yos,
            resumeURL: res.data.data.resumeURL
          })
        })
    }

    if (status === 'unauthenticated') {
      router.push('/id/portal')
    }
  }, [session, status])

  // useEffect(() => {}, [status])

  //   if (status === 'authenticated') {
  //     setSomething('sdjfbk')
  //   }

  const handleUpdate = async (e) => {
    e.preventDefault()
    axios
      .post(
        'https://backend-api-2022.onrender.com/api/users/updateProfile',
        userData
      )
      .then((res) => {
        alert('Profile Updated')
      })
      .catch((err) => {
        alert('There was some error ! Please Try Again')
        console.log(err)
      })
  }
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
                  onChange={(e)=>{
                    setUserData({...userData,name:e.target.value})
                  }}
                  value={userData.name}
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value })
                  }}
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
                  placeholder="Enter your Phone"
                  value={userData.phoneNumber}
                  onChange={(e) => {
                    setUserData({ ...userData, phoneNumber: e.target.value })
                  }}
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
                  onChange={(e) => {
                    setUserData({ ...userData, college: e.target.value })
                  }}
                />
              </div>
              <div>
                <label className={styles.labels}>Year Of Study</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Year Of Study"
                  value={userData.yos}
                  onChange={(e) => {
                    setUserData({ ...userData, yos: e.target.value })
                  }}
                />
              </div>
              {/* <div>
                <label className={styles.labels}>Your Resume</label>
                <input
                  type="file"
                  className={styles.resume}
                  onChange={(e)=>{
                    setUserData({...userData,resume:e.target.value})
                  }}
                  value={userData.resume}
                />
              </div> */}
              <div></div>
              <div>
                <button
                  className={styles.submit}
                  onClick={(e) => handleUpdate(e)}
                >
                  Update
                </button>
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
