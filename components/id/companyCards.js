import React from 'react'
import styles from '../../styles/id/companyCards.module.css'
import Image from 'next/image'
import launchpad from '../../assets/Launchpad.png'

function CompanyCards() {
  const data = [
    {
      id: 1,
      image: './',
      prop1: 'Yantro-Mitra',
      prop2: 'Unpaid',
      prop3: 'kuch bhi',
      path: '',
      status: 'Apply'
    },
    {
      id: 2,
      image: '',
      prop1: 'Apple',
      prop2: '$1,000',
      prop3: 'Hardware CS',
      path: '',
      status: 'Apply'
    },
    {
      id: 3,
      image: '#',
      prop1: 'HDFC',
      prop2: '$600',
      prop3: 'Cyber-security',
      path: '',
      status: 'Apply'
    },
    {
      id: 4,
      image: '#',
      prop1: 'Giordano',
      prop2: '$200',
      prop3: 'Product Design',
      path: '',
      status: 'Apply'
    }
  ]
  return (
    <>
      {data.map((data) => {
        return (
          <>
            <div className={styles.cardContainer}>
              <div className={styles.image}>
                {<Image src={launchpad} width={160} height={160} />}
              </div>
              <div className={styles.props}>
                <div className={styles.propitem}>
                  <a className={styles.companyName}>{data.prop1}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.companyStipend}>{data.prop2}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.Eligibilty}>{data.prop3}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.Eligibilty} href={data.path} download>
                    Job Description
                  </a>
                </div>
              </div>
              <div className={styles.button}>{data.status}</div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default CompanyCards
