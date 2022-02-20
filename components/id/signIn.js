import React, { useState } from 'react'
import styles from '../../styles/id/login.module.css'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

function SignIn() {
  const router = useRouter()

  const [email, setEmail] = useState('aa@g.co')
  const [password, setPassword] = useState('admin')
  const [loginError, setLoginError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // event.stopPropagation()

    console.log('fn called')
    signIn()

    // signIn('credentials', {
    //   name: '',
    //   email,
    //   password,
    //   college: '',
    //   phoneNumber: '',
    //   callbackUrl: `${window.location.origin}/profile`,
    //   redirect: true
    // })
    //   .then(function (result) {
    //     console.log('result', result)
    //     if (result.error !== null) {
    //       if (result.status === 401) {
    //         console.log('heeelooo1')
    //         setLoginError(
    //           'Your username/password combination was incorrect. Please try again'
    //         )
    //       } else {
    //         console.log('heeeloo2o')

    //         setLoginError(result.error)
    //       }
    //     } else {
    //       console.log('heeelooo3')
    //       router.push(result.url)
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  return (
    <div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <h1>{loginError}</h1>
          <input
            type="email"
            className={styles.inputField}
            name="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            className={styles.inputField}
            name="pass"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.butn}>
        <button
          className={styles.btn}
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          SIGN IN
        </button>
      </div>
      <div className={styles.forgot}>
        <Link href="#">
          <a className={styles.forgotPwd}>Forgot Password?</a>
        </Link>
      </div>
    </div>
  )
}

export default SignIn
