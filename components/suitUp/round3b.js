import React, { useState } from 'react'
import styles from '../../styles/suitup/round3b.module.css'
import axios from 'axios'

function Round3b() {
    const [money, setMoney] = useState([
      {
        id: 0,
        rnd: 0,
        log: 0,
        it: 0,
        market: 0,
        name: 'experienced Professionals',
        teamCode: teamCode
      },
      {
        id: 0,
        rnd: 0,
        log: 0,
        it: 0,
        market: 0,
        name: 'professionals',
        teamCode: teamCode
      },
      {
        id: 0,
        rnd: 0,
        log: 0,
        it: 0,
        market: 0,
        name: 'amatures',
        teamCode: teamCode
      }
    ])

        const [emp, setEmp] = useState([
        {
            id: 0,
            head: 'Experienced Professionals'
        },
        {
            id: 1,
            head: 'Professionals'
        },
        {
            id: 2,
            head: 'Amateurs'
        },
        ])
    
    const [spent, setaspent] = useState(0)
    // const updateSum=()=> {
    //     for (var i = 0; i <3; i++){
    //         let temp = money[i]
    //         console.log(temp)
    //         for (var j = 0; j < 5; j++){
    //             setaspent(spent+Object.values(temp)[j]);
                
    //         }
    //     }
    // }

    const [sumEmp, setsumEmp] = useState({
        proAdv: 0,
        pro: 0,
        amature: 0
    })

    const [teamCode, setCode] = useState('')

    function calc() {
        sumEmp.pro = 0;
        sumEmp.amature = 0;
        sumEmp.proAdv = 0;

        for (var i = 0; i < 3; i++){
            let list = Object.values(money)[i];
            console.log(list)
            for (var j = 1; j < 5; j++){
                console.log(Object.values(list)[j])
                if (i == 0) {
                    sumEmp.proAdv += Object.values(list)[j] * 125
                    setsumEmp({...sumEmp})
                }
                else if (i == 1) {
                     sumEmp.pro += Object.values(list)[j]*75
                    setsumEmp({
                      ...sumEmp
                    })
                }
                else if (i == 2) {
                    sumEmp.amature += Object.values(list)[j] * 25
                    setsumEmp({
                      ...sumEmp
                    })
                }
            }
        }
    }
    console.log(sumEmp)
    function sub() {
        if (spent != 0) {
            setaspent(spent - 1);
            calc();
        }
    }
    function add() {
        setaspent(spent + 1);
        calc();
    }
    const handleChange = (e) => {
        e.preventDefault();
        // console.log(teamCode)
        setCode(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        money[0].teamCode = teamCode
        money[1].teamCode = teamCode
        money[2].teamCode = teamCode
        setMoney({...money})
                axios
                  .post(
                    'https://sheet.best/api/sheets/596b3568-0470-409b-9043-6978f6adb668',
                    [money[0], money[1], money[2]]
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
              <div className={styles.header}>Round 3b - Hiring Employees</div>
              <div className={styles.team}>
                  <div className={styles.teamTag}>Team Code</div>
                  <input className={styles.input} name="teamCode" type="text" value={teamCode} onChange={handleChange} />
              </div>
        <div className={styles.form}>
          <div className={styles.sect}>
            <div className={styles.mil1}></div>
            <div className={styles.mil1}>R&D</div>
            <div className={styles.mil1}>Logistics</div>
            <div className={styles.mil1}>IT</div>
            <div className={styles.mil1}>Marketing</div>
          </div>
          {emp.map((data) => {
            return (
              <>
                <div className={styles.sect}>
                  <div className={styles.sectName}>{data.head}</div>
                  <div className={styles.mil}>
                    <div className={styles.interestInput}>
                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          if (money[data.id].rnd != 0) {
                            e.preventDefault()
                            money[data.id].rnd -= 1
                            setMoney({ ...money })
                            sub()
                          }
                        }}
                      >
                        {' '}
                        -{' '}
                      </div>

                      <div className={styles.Count}>{money[data.id].rnd}</div>

                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          e.preventDefault()
                          if (true) {
                            money[data.id].rnd += 1
                            setMoney({ ...money })
                            add()
                          }
                        }}
                      >
                        {' '}
                        +{' '}
                      </div>
                    </div>
                  </div>
                  <div className={styles.mil}>
                    <div className={styles.interestInput}>
                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          e.preventDefault()
                          if (money[data.id].log != 0) {
                            money[data.id].log -= 1
                            setMoney({ ...money })
                            sub()
                          }
                        }}
                      >
                        {' '}
                        -{' '}
                      </div>

                      <div className={styles.Count}>{money[data.id].log}</div>

                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          e.preventDefault()
                          money[data.id].log += 1
                          setMoney({ ...money })
                          add()
                        }}
                      >
                        {' '}
                        +{' '}
                      </div>
                    </div>
                  </div>
                  <div className={styles.mil}>
                    <div className={styles.interestInput}>
                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          e.preventDefault()
                          if (money[data.id].it != 0) {
                            money[data.id].it -= 1
                            setMoney({ ...money })
                            sub()
                          }
                        }}
                      >
                        {' '}
                        -{' '}
                      </div>

                      <div className={styles.Count}>{money[data.id].it}</div>

                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          e.preventDefault()
                          money[data.id].it += 1
                          setMoney({ ...money })
                          add()
                        }}
                      >
                        {' '}
                        +{' '}
                      </div>
                    </div>
                  </div>
                  <div className={styles.mil}>
                    <div className={styles.interestInput}>
                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          e.preventDefault()
                          if (money[data.id].market != 0) {
                            money[data.id].market -= 1
                            setMoney({ ...money })
                            sub()
                          }
                        }}
                      >
                        {' '}
                        -{' '}
                      </div>

                      <div className={styles.Count}>
                        {money[data.id].market}
                      </div>

                      <div
                        className={styles.editCount}
                        onClick={(e) => {
                          e.preventDefault()
                          money[data.id].market += 1
                          setMoney({ ...money })
                          add()
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
          })}
        </div>
        <div className={styles.total}>Total Employees : {spent}</div>
        <div className={styles.total}>
          Total money spend : {sumEmp.pro + sumEmp.proAdv + sumEmp.amature}k{' '}
              </div>
        <div className={styles.submit} onClick={handleSubmit}>Submit</div>
      </div>
    </>
  )
}

export default Round3b