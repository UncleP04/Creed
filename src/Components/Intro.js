import styles from '../Styles/intro.module.css'
import Image from 'next/image';
import Ape1 from '../Images/ape1.png'
import Ape2 from '../Images/ape2.png'

const Intro = () => {
  return (
    <div className={styles.introBox}>
      <div className={styles.explore}>
        <Image src={Ape1} alt="ape.png" className={styles.ape1} />
        <div className={styles.exploreContent}>
          <span>
            <h1>Explore</h1>
            NFT art trading.
          </span>
          <p>
            An NFT collection of 10,000 Bored Ape NFTs—unique digital
            collectibles living on the Ethereum blockchain
          </p>
        </div>
      </div>
      <div className={styles.premier}>
        <div className={styles.premierContent}>
          <span>NFT.org powered by</span>
          <h2>NFT Protocol-Premier Decentralized NFT Trading</h2>
        </div>
        <Image src={Ape2} alt="ape2.png" className={styles.ape2} />
      </div>
    </div>
  );
}

export default Intro;

