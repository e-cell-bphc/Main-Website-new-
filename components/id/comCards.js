import React, { useState } from 'react';
import styles from "../../styles/id/cCards.module.css"
import Image from 'next/image';
import VoluntHere from '../../assets/Volunt.png'
import CashRich from '../../assets/Cashrich.png'
import three from '../../assets/03.png'
import Jally from '../../assets/04.png'
import YantroMitra from '../../assets/05.png'
import Zhiffy from '../../assets/06.png'
import SuperTraders from '../../assets/07.png'
import Roado from '../../assets/08.png'
import cospaces from '../../assets/09.png'


function CompCards() {

    const [data, setData] = useState([
      {
        src: VoluntHere,
        id: 1,
      },
      {
        src: CashRich,
        id: 2,
      },
      {
        src: three,
        id: 3,
      },
      {
        src: Jally,
        id: 4,
      },
    //   {
    //     src: YantroMitra,
    //     id: 5,
    //   },
      {
        src: Zhiffy,
        id: 6,
      },
      {
        src: SuperTraders,
        id: 7,
      },
      {
        src: Roado,
        id: 8,
      },
      {
        src: cospaces,
        id: 9,
      },
    ]);
    // const fetchapi = async() => {
    //      const response = await fetch("/api/cards");
    //   const data1 = await response.json();
    //     setData(data1);
    //     console.log("test");
    // }

    // globalThis.onload = function () {
    //     fetchapi();
    // };
    return (
        <>{data.map((data) => {
            return (
                <>
                    <div className={styles.card} key={data.id} >
                <div className={styles.image}>
                    <Image src={data.src} width={240} height={135}/>
                </div>
            </div>
                </>
            )
        })}
            
        </>
  );
}

export default CompCards;
