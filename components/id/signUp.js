import React from 'react'
import Link from 'next/link'
import styles from '../../styles/id/login.module.css'

function SignUp() {
  return (
    <div className={styles.inputs}>
      <div className={styles.input}>
        <input type="text" className={styles.inputField} placeholder="Name" />
      </div>
      <div className={styles.input}>
        <input type="email" className={styles.inputField} placeholder="Email" />
      </div>
      <div className={styles.input}>
        <input
          type="password"
          className={styles.inputField}
          placeholder="Password"
        />
      </div>
      <div className={styles.input}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="College Name"
        />
      </div>
      <div className={styles.input}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Year of Study"
        />
      </div>
      <div className={styles.input}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Contact Number"
        />
      </div>
      <div className={styles.input}>
        <input type="text" className={styles.inputField} placeholder="City" />
      </div>
      <div className={styles.butn}>
        <button className={styles.Sbtn}>SIGN UP</button>
      </div>
    </div>
  )
}

export default SignUp
