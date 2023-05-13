import styles from "../Styles/gallery.module.css";
import Layer3 from "../Images/Ellipse3.png";
import Layer4 from "../Images/Ellipse4.png";
import Army from "../Images/army.png";
import Boz from "../Images/boz.png";
import King from "../Images/king.png";
import Emperor from "../Images/emperor.png";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className={styles.galleryBox} id="gallery">
        <span className={styles.galleryHeader}>
          <h1>NFT Gallery</h1>
          <p>
            Our NFT Gallery often used in business, technology and project to
            provide a clear and conclence overview of a path that needs to be
            taken to presentation.
          </p>
        </span>
        <span className={styles.galleryGrid}>
          <span className={styles.galleryImg}>
            <Image src={Army} alt="Army.png" className={styles.image} />
          </span>
          <span className={styles.galleryImg}>
            <Image src={Boz} alt="Boz.png" className={styles.image} />
          </span>
          <span className={styles.galleryImg}>
            <Image src={King} alt="King.png" className={styles.image} />
          </span>
          <span className={styles.galleryImg}>
            <Image src={Emperor} alt="Emperor.png" className={styles.image} />
          </span>
        </span>
        <span className={styles.galleryHeader}>
          <h2>
            Take a step and start your journey into our unique world of
            collectables
          </h2>
          <input className={styles.getStarted} placeholder="Get Started" value="Get Started" type="submit" />
        </span>
        <Image src={Layer3} alt="layerEffect.png" className={styles.Layer3} />
        <Image src={Layer4} alt="layerEffect.png" className={styles.Layer4} />
      </div>
    </>
  );
};

export default Gallery;
