import React, { useState } from 'react'
import styles from "../../styles/suitup/round5.module.css"
import axios from 'axios';

function Round5() {
    // const [teamCode, setTeam] = useState()
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: [e.target.value] })
        console.log(data.teamCode)
    }

    const [data, setData] = useState({
        google: 4,
        facebook: 0,
        YouTube: 0,
        Chatbots: 0,
        ColdMail: 0,
        Blogs: 0,
        Newspaper: 0,
        Banners: 0,
        Magazines: 0,
        Goodies: 0,
        television: 0,
        Radio: 0,
        bits: 0,
        teamCode: ''
    })

    function retCols(i) {
            return (
              <>
                <div className={styles.col3}>
                        <div className={styles.edit} onClick={() => {
                            if (Object.values(data)[i] != 0) {
                             setData({
                               ...data,
                               [Object.keys(data)[i]]:
                                 Object.values(data)[i] - 1
                             })                               
                            }
                  }}>-</div>
                    <div className={styles.val}>{Object.values(data)[i]}</div>
                        <div className={styles.edit} onClick={() => {                            
                            setData({
                              ...data,
                              [Object.keys(data)[i]]: Object.values(data)[i]+1
                            })
                  }}>+</div>
                </div>
              </>
            )
    }
    const handleSubmit = async () => {
        axios
          .post(
            'https://sheet.best/api/sheets/9a4f2125-b4d2-480f-be80-74d44be8d92e',
            [data]
          )
          .then((res) => {
            // if (res) {
            //   setSent(false)
            // } else {
            //   setSent(true)
            // }
            console.log(res)
          })
    }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>Round 5 - Advertising</div>
        <div className={styles.team}>
          <div className={styles.teamTag}>Team Code</div>
          <input
            className={styles.input}
            name="teamCode"
            type="text"
            value={data.teamCode}
            onChange={handleChange}
          />
        </div>
        <div className={styles.matrix}>
          <div className={styles.sect}>
            <div className={styles.mil1}></div>
            <div className={styles.mil1}>Avenues</div>
            <div className={styles.mil1}>Price</div>
            <div className={styles.mil1}>Quantity</div>
          </div>
          <div className={styles.sect}>
            <div className={styles.col}>
              <div className={styles.col2}>Digital Marketing Type 1</div>
              <div className={styles.col2}>Digital Marketing Type 2</div>
              <div className={styles.col2}>Print Media and Goodies</div>
              <div className={styles.col2}>Broadcast</div>
              <div className={styles.col2}>BITS Techfest SponsorShip</div>
            </div>
            <div className={styles.col}>
              <div className={styles.col1}>Google Ads</div>
              <div className={styles.col1}>Facebook Ads</div>
              <div className={styles.col1}>YouTube Ads</div>
              <div className={styles.col1}>Chatbots</div>
              <div className={styles.col1}>Cold Mail</div>
              <div className={styles.col1}>Blogs</div>
              <div className={styles.col1}>Newspaper</div>
              <div className={styles.col1}>Banners</div>
              <div className={styles.col1}>Magazines</div>
              <div className={styles.col1}>Goodies</div>
              <div className={styles.col1}>Television</div>
              <div className={styles.col1}>Radio</div>
              <div className={styles.col1}></div>
            </div>
            <div className={styles.col}>
              <div className={styles.col1}>400k</div>
              <div className={styles.col1}>350k</div>
              <div className={styles.col1}>300k</div>
              <div className={styles.col1}>300k</div>
              <div className={styles.col1}>300k</div>
              <div className={styles.col1}>300k</div>
              <div className={styles.col1}>1000k</div>
              <div className={styles.col1}>800k</div>
              <div className={styles.col1}>750k</div>
              <div className={styles.col1}>500k</div>
              <div className={styles.col1}>1000k</div>
              <div className={styles.col1}>750k</div>
              <div className={styles.col1}>750k</div>
            </div>
            <div className={styles.col}>
                {retCols(0)}
                {retCols(1)}
                {retCols(2)}
                {retCols(3)}
                {retCols(4)}
                {retCols(5)}
                {retCols(6)}
                {retCols(7)}
                {retCols(8)}
                {retCols(9)}
                {retCols(10)}
                {retCols(11)}
                {retCols(12)}
            </div>
          </div>
              </div>
              <div className={styles.submit} onClick={handleSubmit}>Submit</div>
      </div>
    </>
  )
}

export default Round5