import Image from 'next/image'
import styles from './page.module.css'
import Nav from '@/Components/Nav'
import Intro from "@/Components/Intro";
import Trading from '@/Components/Trading';
import Gallery from '@/Components/Gallery';

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Intro />
      <Trading />
      <Gallery />
    </main>
  )
}
