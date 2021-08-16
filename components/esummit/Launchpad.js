import styles from "../../styles/esummit/launchpad.module.css";
import Link from "next/link";
import Carousel from "./carousel";
import Social from "../homepage/socialmedianew";
import { carouselData } from "./carouselData";
export default function Launchpad() {
  return (
    <div className={styles.outer_container}>
      <div className={styles.container1}>
        <div className={styles.headings}>
          <div className={styles.heading1}>LAUNCHPAD</div>
          <div className={styles.heading2}>Ready for lift off?</div>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <Carousel slides={carouselData}/>
          </div>
        </div>
      </div>
      <Link href="/commingsoon">
      <button className={styles.buy_button}>BUY TICKETS</button>
      </Link>
    </div>
  );
}