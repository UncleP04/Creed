import styles from '../Styles/trading.module.css'
import NFTImage from "../Images/Group.png";
import Layer1 from "../Images/Ellipse1.png";
import Layer2 from "../Images/Ellipse2.png";
import Layer3 from "../Images/Ellipse3.png";
import Layer4 from "../Images/Ellipse4.png";
import Image from "next/image";

const Trading = () => {
  return (
    <>
      <div className={styles.tradingBox}>
        <span className={styles.tradingHeader}>
          <h1>The Future Of NFT Trading</h1>
          <p>
            Our NFT Gallery often used in business, technology and project to
            provide a clear and conclence overview of a path that needs to be
            taken to presentation.
          </p>
        </span>
        <div className={styles.tradingGrid}>
          <div className={styles.imageBox}>
            <Image src={NFTImage} alt="group.png" className={styles.NFTImage} />
          </div>
          <div className={styles.tradingGridContent}>
            <span>
              <h2>Data analysis with problem factor </h2>
              <p>
                Creed- NFT Trading is expected to be more common in future,
                allowing for the creation of more digital and multi assets
              </p>
            </span>
            <span>
              <h2>Functionality solutions for users</h2>
              <p>
                Creed NFT Trading is expected to be more common in future
              </p>
            </span>
            <span>
              <h2>Easy to use and Understand </h2>
              <p>
                Creed NFT Trading is very easy to use and understand. With
                all incredible assets and users experience protocols
              </p>
            </span>
          </div>
        </div>
        <Image src={Layer1} alt="layerEffect.png" className={styles.Layer1} />
        <Image src={Layer2} alt="layerEffect.png" className={styles.Layer2} />
        <Image src={Layer3} alt="layerEffect.png" className={styles.Layer3} />
        <Image src={Layer4} alt="layerEffect.png" className={styles.Layer4} />
      </div>
    </>
  );
};

export default Trading;
