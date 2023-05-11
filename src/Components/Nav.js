import Link from "next/link";
import styles from "../Styles/nav.module.css";
// import { useState } from "react";

const Nav = () => {
  // const [toggle, setToggle] = useState(false);

  // const ToggleBtn = () => {
  //   setToggle(!false);
  // };

  return (
    <div className={styles.navBox}>
      <i>Creed</i>
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/" className={styles.links}>
              Docs
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.links}>
              Tokens
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.links}>
              Governance
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.links}>
              Uniswap
            </Link>
          </li>
        </ul>
        <button>Connect Wallet</button>
      </nav>
      <button className={styles.navBtn}>
        $$
      </button>
    </div>
  );
};

export default Nav;
