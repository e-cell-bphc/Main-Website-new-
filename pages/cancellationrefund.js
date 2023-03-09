import React from 'react'
import styles from '../styles/OtherLinks/terms.module.css'
import Head from 'next/head'
import Link from 'next/link'
function cancellation() {
  return (
    <>
      <Head>
        <title>Cancellation and Refund Policy| E-Cell BPHC</title>
      </Head>
      <div className={styles.outer}>
        <h2 className={styles.heading}>Cancellation and Refund Policy</h2>
        <div className={styles.para}>
          <p>
            All payments made on this website are final. In exceptional cases,
            please contact us at ecell@hyderabad.bits-pilani.ac.in
          </p>
        </div>
      </div>
    </>
  )
}

export default cancellation
