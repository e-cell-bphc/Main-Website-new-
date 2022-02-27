import React from 'react'
import Link from 'next/link'
import styles from '../../styles/razorCallback.module.css'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PaymentSuccess() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faCheckDouble} className={styles.logoz} />{' '}
        </div>
        <div className={styles.success}>Payment Successful</div>
        <div className={styles.back}>
          Click here to go back to
          <Link href="/id/portal" className={styles.link}>
            Internship Drive
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
