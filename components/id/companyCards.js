import React, { useEffect, useState } from 'react'
import styles from '../../styles/id/companyCards.module.css'
import Image from 'next/image'
import launchpad from '../../assets/Launchpad.png'
import { useSession } from 'next-auth/react'
import axios from 'axios'

function CompanyCards() {
  const { data: session, status } = useSession()
  const [datas, setData] = useState([])
  useEffect(() => {
    async function get() {
      axios
        .post('https://backend-api-2022.onrender.com/api/company/getCompany')
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        })
        .catch((err) => {
          alert(err)
        })
    }
    get()
  }, [])

  console.log(datas)
  function Auth({ prop }) {
    if (status == 'authenticated') {
      return (
        <>
          <div className={styles.button}>{prop.statuss}</div>
        </>
      )
    } else return null
  }

  return (
    <>
      {datas.map((data) => {
        return (
          <div key={data.name}>
            <div className={styles.cardContainer}>
              <div className={styles.image}>
                {
                  <Image
                    src={`/assets/${data.logoURL}`}
                    width={160}
                    height={160}
                  />
                }
              </div>
              <div className={styles.props}>
                <div className={styles.propitem}>
                  <a className={styles.companyName}>{data.name}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.companyStipend} href={data.websiteLink}>
                    {data.websiteLink}
                  </a>
                </div>
                <div className={styles.headprop}>Roles</div>
                <div className={styles.propitem1}>
                  {data.roles.map((data) => {
                    return <a className={styles.Eligibilty}>{data}</a>
                  })}
                </div>
                <div className={styles.propitem}>
                  <a className={styles.Eligibilty} href={data.companyDesc}>
                    Job Description
                  </a>
                </div>
              </div>
              {/* <Auth prop={data} /> */}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CompanyCards
