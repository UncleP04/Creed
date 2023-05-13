import styles from "../Styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Twitter from "../Images/twitter.png";
import LinkedIn from "../Images/linkedin.png";
import Telegram from "../Images/telegram.png";
import YouTube from "../Images/youtube.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerBox} id="ContactUs">
        <div className={styles.footerGrid}>
          <span className={styles.formBox}>
            <label for="form">Sign Up to receive product updates.</label>
            <form id="form" className={styles.mainForm}>
              <label for="mail">Your Mail</label>
              <input id="mail" type="text" />
            </form>
          </span>
          <span className={styles.help}>
            <h3>Helps & Enquiry</h3>
            <ul>
              <li>Privacy and Policy</li>
              <li>Terms of use</li>
              <li>Services</li>
              <li>Faq</li>
            </ul>
          </span>
          <span className={styles.footerLink}>
            <h3>Links Service</h3>
            <ul>
              <li>
                <Image
                  src={Twitter}
                  alt="twitter.png"
                  className={styles.linkIcon}
                />
              </li>
              <li>
                <Image
                  src={LinkedIn}
                  alt="LinkedIn.png"
                  className={styles.linkIcon}
                />
              </li>
              <li>
                <Image
                  src={YouTube}
                  alt="YouTube.png"
                  className={styles.linkIcon}
                />
              </li>
            </ul>
          </span>
        </div>

        <div className={styles.footerPreserved}>
          <Link href="/footer" className={styles.links}>
            @2023 Rights Reserved
          </Link>
          <Link href="/footerlk" className={styles.links}>
            Terms and Privacy
          </Link>
          <Image
            src={Telegram}
            alt="Telegram.png"
            className={styles.linkIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
