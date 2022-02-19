import React from 'react';
import { useState } from 'react';
import Link from 'next/link'
import styles from '../../styles/id/navbarid.module.css'
import logout from '../../assets/power-off.png'
import Image from 'next/image';
import launchpad from '../../assets/Launchpad.png'
function Navbar() {
    const [hamOn, setHamOn] = useState(true);

    const handleClick = () => {
        setHamOn(() => !hamOn);
  }
  
  const cards = [
    {
      id: 1,
      name: "Dashboard",
      link:"/id/portal"
    },
    {
      id: 2,
      name: "Profile",
      link:"/id/profile"
    },
    {
      id: 3,
      name: "Companies",
      link: "/id/viewCompany"
    },
    {
      id: 4,
      name: "Pay Now",
      link: "/id/"
    }
  ];
    return (
      <>
        <div className={styles.ham} onClick={handleClick}>
          <div className={hamOn ? styles.line1 : styles.run1}>
            <div className={hamOn ? styles.innerline1 : styles.run1}></div>
          </div>
          <div className={hamOn ? styles.line2 : styles.run2}>
            <div className={hamOn ? styles.innerline2 : styles.run2}></div>
          </div>
          <div className={hamOn ? styles.line3 : styles.run3}>
            <div className={hamOn ? styles.innerline3 : styles.run3}></div>
          </div>
          <div className={hamOn ? styles.backcross1 : styles.runIn1}></div>
          <div className={hamOn ? styles.backcross2 : styles.runIn2}></div>
        </div>

        <div className={hamOn ? styles.up : styles.down}>
          <div className={hamOn ?styles.none:styles.innerdown}>
            {cards.map((data) => {
              return (
                <><Link href={data.link}>
                  <div onClick={handleClick}
                    className={hamOn ? styles.fadeout : styles.fadein}
                    key={data.id}
                  >
                    {data.name}
                  </div>
                  </Link>
                </>
              );
            })}
          </div>
            <div className={hamOn ? styles.logout_off : styles.logout_on} >
              <Image src={logout} alt="logout" />
            </div>
            <div className={hamOn ? styles.launchpad_off : styles.launchpad_on} >
              <Image src={launchpad} alt="logout" />
            </div>
        </div>
      </>
    );
}

export default Navbar;
