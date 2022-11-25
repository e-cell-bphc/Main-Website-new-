import React from 'react'
import { useState } from 'react'
import styles from '../../styles/suitup/suitup.module.css'
import axios from 'axios'

function Roundboxes({ }) {
  const [userData, setUser] = useState({
    sector: '',
    companyName: '',
    TeamName:'',
  })

  const [money, setMoney] = useState([
    {
      id: "Bank",
      four: 0,
      six: 0,
      ten:0
    },
    {
      id: "Angle",
      four: 0,
      six: 0,
      ten:0
    },
    {
      id: "NBFCS",
      four: 0,
      six: 0,
      ten:0
    },
  ])

  const [col, setcol] = useState({
    four : false,
    six: false,
    ten:false
  })
  const [sum,setsum]=useState(0)
  const updateSum = (data) => {
    console.log(data)
    if(data=='four-'){ setsum(sum-4)}
    else if(data=='four+'){ setsum(sum+4)}
    else if(data=='six-'){ setsum(sum-6)}
    else if (data == 'six+') { setsum(sum +6) }
    else if(data=='ten-'){ setsum(sum-10)}
    else if(data=='ten+'){ setsum(sum+10)}
  }
  const handleUserChange= (e) => {
    e.preventDefault()
    setUser({ ...userData, [e.target.name]: e.target.value })
    console.log({userData})
  }

  const handleSubmit = async (e) => {
    let merged1 = { ...money[0], ...userData }
    console.log(money[1])
  let merged2 = {...money[1],...userData}
  let merged3 = {...money[2],...userData}
    console.log(merged2)
    axios
      .post(
        'https://sheet.best/api/sheets/4a8f3cbb-16da-4c16-95a7-34de33f4534e',
        [merged1, merged2, merged3]
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
  const InvestData = [
    {
      id: 0,
      head: 'Banks',
      head1: '10% interest rate',
      head2: '12.5% interest rate',
      head3: '15% interest rate',

    },
    {
      id: 1,
      head: 'Angle Inverstors',
      head1: '10% Equity rate',
      head2: '12.5% equity rate',
      head3: '15% equity rate',
    },
    {
      id: 2,
      head: 'NBFCs',
      head1: '5% interest + 5% equity rate',
      head2: '6.25% interest + 6.25% equity rate',
      head3: '7.5% interest + 7.5% equity rate',
    }
  ]
  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>
          <div className={styles.header}>Round 1 - Inverstors Round</div>
          <div className={styles.UserBox}>
            <div className={styles.User}>
              <div className={styles.userName}>Sector</div>
              <input className={styles.userInput} name='sector' value={userData.sector} type='text' onChange={handleUserChange} />
            </div>
            <div className={styles.User}>  
              <div className={styles.userName}>Company Name</div>
              <input className={styles.userInput} name='companyName' value={userData.companyName} type='text' onChange={handleUserChange}/>
            </div>
            <div className={styles.User}>  
              <div className={styles.userName}>Team code</div>
              <input className={styles.userInput} name='TeamName' value={userData.TeamName} type='text' onChange={handleUserChange}/>
            </div>
          </div>
          <div className={styles.matrix}>
            <div className={styles.sect}>
              <div className={styles.mil1}></div>
              <div className={styles.mil1}>4 million</div>
              <div className={styles.mil1}>6 million</div>
              <div className={styles.mil1}>10 million</div>
            </div>
            {InvestData.map((data) => {
              return (
                <>
                  <div className={styles.sect}>
                    <div className={styles.sectName}>{data.head}</div>
                    <div className={styles.mil}>
                      <div className={styles.interest}>{data.head1}</div>
                      <div className={styles.interestInput}>
                        <div
                          className={styles.editCount}
                          onClick={(e) => {
                            if (money[data.id].four != 0) {
                              money[data.id].four -= 1
                              setMoney({ ...money })
                              col.four = false
                              setcol({ ...col })
                              updateSum("four-")
                            }
                          }}
                        >
                          {' '}
                          -{' '}
                        </div>

                        <div className={styles.Count}>
                          {money[data.id].four}
                        </div>

                        <div
                          className={styles.editCount}
                          name={data.name1}
                          onClick={(e) => {
                            if (money[data.id].four == 0 && !col.four) {
                              money[data.id].four += 1
                              setMoney({ ...money })
                              col.four = true
                              setcol({ ...col })
                              updateSum('four+')
                            }
                          }}
                        >
                          {' '}
                          +{' '}
                        </div>
                      </div>
                    </div>
                    <div className={styles.mil}>
                      <div className={styles.interest}>{data.head2}</div>
                      <div className={styles.interestInput}>
                        <div
                          className={styles.editCount}
                          onClick={(e) => {
                            if (money[data.id].six != 0) {
                              money[data.id].six -= 1
                              setMoney({ ...money })
                              col.six = false
                              setcol({ ...col })
                              updateSum('six-')
                            }
                          }}
                        >
                          {' '}
                          -{' '}
                        </div>

                        <div className={styles.Count}>
                          {money[data.id].six}
                        </div>

                        <div
                          className={styles.editCount}
                          name={data.name1}
                          onClick={(e) => {
                            if (money[data.id].six == 0 && !col.six) {
                              money[data.id].six += 1
                              setMoney({ ...money })
                              col.six = true
                              setcol({ ...col })
                              updateSum('six+')
                            }
                          }}
                        >
                          {' '}
                          +{' '}
                        </div>
                      </div>
                    </div>
                    <div className={styles.mil}>
                      <div className={styles.interest}>{data.head3}</div>
                      <div className={styles.interestInput}>
                        <div
                          className={styles.editCount}
                          onClick={(e) => {
                            if (money[data.id].ten != 0) {
                              money[data.id].ten -= 1
                              setMoney({ ...money })
                              col.ten = false
                              setcol({ ...col })
                               updateSum('ten-')
                            }
                          }}
                        >
                          {' '}
                          -{' '}
                        </div>

                        <div className={styles.Count}>
                          {money[data.id].ten}
                        </div>

                        <div
                          className={styles.editCount}
                          name={data.name3}
                          onClick={(e) => {
                            if (money[data.id].ten == 0 && !col.ten) {                              
                              money[data.id].ten += 1
                              setMoney({ ...money })
                              col.ten = true
                              setcol({ ...col })
                               updateSum('ten+')
                            }
                          }}
                        >
                          {' '}
                          +{' '}
                        </div>
                      </div>
                    </div>

                  </div>
                </>
              )
            })
            }
          </div>
          <div className={styles.total}>
            Total Amount : {sum} million
          </div>
        </div>
        <div className={styles.submit} onClick={handleSubmit}>Submit</div>
      </div>
    </>
  )
}

export default Roundboxes