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
          <a href="https://www.instagram.com/ecell_bphc/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/eCELL.BPHC">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/ecell_bphc">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/e-cell-bphc/mycompany/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
}
