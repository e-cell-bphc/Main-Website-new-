import React from 'react'
import styles from '../styles/OtherLinks/terms.module.css'
import Head from 'next/head'
import Link from 'next/link'
function shipping() {
  return (
    <>
      <Head>
        <title>Shipping and Deliveries| E-Cell BPHC</title>
      </Head>
      <div className={styles.outer}>
        <h2 className={styles.heading}>Shipping and Deliveries</h2>
        <div className={styles.para}>
          <p>
            Payments made on this website will be proccessed within 48 hours. To
            know more about your order email us at
            ecell@hyderabad.bits-pilani.ac.in
          </p>
        </div>
      </div>
    </>
  )
}

export default shipping
