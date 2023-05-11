import styles from "../Styles/marketplace.module.css";
import Army from "../Images/image 42.png";
import Boz from "../Images/image 43.png";
import King from "../Images/image 44.png";
import Emperor from "../Images/image 45.png";
import Image from "next/image";

const MarketPlace = () => {
  return (
    <>
      <div className={styles.marketPlaceBox}>
        <span className={styles.marketPlaceHeader}>
          <h1>NFT Market Place</h1>
          <p>
            Our NFTs are listed in several marketplaces like OpenSea, Axie
            Infinity, CyberPunk, Super Rare etc.
          </p>
        </span>
        <span className={styles.marketPlaceGrid}>
          <span className={styles.marketPlaceImg}>
            <Image src={Army} alt="Army.png" className={styles.image} />
          </span>
          <span className={styles.marketPlaceImg}>
            <Image src={Boz} alt="Boz.png" className={styles.image} />
          </span>
          <span className={styles.marketPlaceImg}>
            <Image src={King} alt="King.png" className={styles.image} />
          </span>
          <span className={styles.marketPlaceImg}>
            <Image src={Emperor} alt="Emperor.png" className={styles.image} />
          </span>
        </span>
        <span className={styles.marketPlaceHeader}>
          <h2>
            Listed On the best NFT platforms in the space OpenSea, AxieInfinity,
            Cyber Punk etc.
          </h2>
          <button className={styles.getStarted}>View Here</button>
        </span>
      </div>
    </>
  );
};

export default MarketPlace;
