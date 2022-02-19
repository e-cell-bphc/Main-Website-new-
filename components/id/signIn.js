import React from "react";
import styles from "../../styles/id/login.module.css";
import Link from "next/link";

function SignIn() {
  return (
    <div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <input
            type="email"
            className={styles.inputField}
            name="username"
            placeholder="Email"
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            className={styles.inputField}
            name="pass"
            placeholder="password"
          />
        </div>
      </div>
      <div className={styles.butn}>
        <button className={styles.btn}>SIGN IN</button>
      </div>
      <div className={styles.forgot}>
        <Link href="#">
          <a className={styles.forgotPwd}>Forgot Password?</a>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
