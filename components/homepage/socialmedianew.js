import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/homepage/socialmedianew.module.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <>
      <div className={styles.social1}>
        <div className={styles.icons1}>
          <a href="https://www.instagram.com/ecell_bphc/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/eCELL.BPHC" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/ecell_bphc" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/e-cell-bphc/mycompany/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
}
