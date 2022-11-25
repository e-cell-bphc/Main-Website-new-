import React, { useState } from 'react'
import axios from 'axios';
import styles from '../../styles/suitup/round3a.module.css'


function Round3a() {
    const [teamName, setTeamName] = useState('')
    const handleChangeTeam = (e) => {
        e.preventDefault();
        setTeamName(e.target.value)
    }
    const [count, setCount] = useState({
        servers: 0,
        warehouse: 0,
        logistics:0,
        manu: 0,
        rnD: 0,
        service: 0,
        TeamName: ''
    })

    const [display, setDisplay] = useState(true)

    const handleSubmit = async (e) => {
        count.TeamName = teamName;
        setCount({...count})
        e.preventDefault();
        console.log(count)
        axios
          .post(
            'https://sheet.best/api/sheets/ee23e37e-0fce-4f94-9a8e-49e34fd75ee9',
            [count]
          )
          .then((res) => {
            // if (res) {
            //   setSent(false)
            // } else {
            //   setSent(true)
            // }
            console.log(res)
          })
        setDisplay(false)
        }
    const [total, setTotal] = useState(0)

    const list = [
      {
        id: 0,
        name: 'Servers and Data Storage',

      },
      {
        id: 1,
        name: ' WareHouse',

      },
      {
        id: 2,
        name: 'Logistics and Services',

      },
      {
        id: 3,
        name: 'Manufacturing Units',
        name2: "four"
      },
      {
        id: 4,
        name: 'R&D (includes licenses and patents)',

      },
      {
        id: 5,
        name: 'Customer Service and Feedback',
      }
    ]
    // function checkTotal() {
    //     for (var i = 0; i < list.length; i++){
    //             var d = total + list[i].key
    //         }
    //     }
        
        
    // const handleClickAdd = (key) => {
    //     console.log(count)
    //     if (total < 3 && key==0) {   
    //         setCount({...count, key: key+1})
    //         setTotal(total+1)
    //     }
    // }
    // const handleClickSub = () => {
    //     if (total > 0) {
    //         setTotal(total-1)
    //         // setCount( data = data- 1);
    //     }
  return (
    <>
      {display ? (
        <div className={styles.main}>
          <div className={styles.mainHead}> Round 3a - Asset Management</div>
          <div className={styles.inputTeamName}>
            <div className={styles.TeamName1}>Team Code</div>
            <input
              className={styles.TeamName}
              name="teamname"
              value={teamName}
              onChange={handleChangeTeam}
            />
          </div>
          {/* <div className={styles.getscore}>Get Stats</div>
        <div className={styles.output}>Your % outreach in Market is : </div>
        <div className={styles.output}> Amount Remaining : </div> */}
          <div className={styles.purchasing}>
            <div className={styles.header}>Purchasing assets</div>
            <div className={styles.subheader}>
              Each asset will cost you 1 million
            </div>
            <div className={styles.subheader}>
              note : You can spend a maximum of 10 Million in this round.
            </div>
            <div className={styles.Matrix}>
              {list.map((data) => {
                return (
                  <div className={styles.row} key={data.id}>
                    <div className={styles.name1}>{data.name}</div>
                    <div className={styles.name}>
                      <div
                        className={styles.add}
                        onClick={() => {
                          console.log(Object.values(count)[data.id])
                          if (Object.values(count)[data.id] != 0) {
                            setCount({
                              ...count,
                              [Object.keys(count)[data.id]]:
                                Object.values(count)[data.id] - 1
                            })
                            setTotal(total - 1)
                          }
                        }}
                      >
                        -
                      </div>
                      <div className={styles.add1}>
                        {Object.values(count)[data.id]}
                      </div>
                      <div
                        className={styles.add}
                        onClick={() => {
                          console.log(Object.values(count)[data.id])
                          if (total < 10) {
                            setCount({
                              ...count,
                              [Object.keys(count)[data.id]]:
                                Object.values(count)[data.id] + 1
                            })
                            setTotal(total + 1)
                          }
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={styles.total}>
              Total amount spent in this round : {total} million
            </div>
            <div className={styles.submit} onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.approve}>Your Response has been recorded</div>
      )}
    </>
  )
}

export default Round3a