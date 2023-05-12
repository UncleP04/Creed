import styles from './page.module.css'
import Intro from "@/Components/Intro";
import Trading from '@/Components/Trading';
import Gallery from '@/Components/Gallery';
import MarketPlace from '@/Components/MarketPlace';
import Footer from '@/Components/Footer';
import NavBar from '@/Components/Nav';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Intro />
      <Trading />
      <Gallery />
      <MarketPlace />
      <Footer />
    </main>
  )
}
