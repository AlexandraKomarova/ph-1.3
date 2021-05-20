import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
//components
import Heart from '../components/Heart'
import BgRed from '../components/BgRed'
import BgWhiteRight from '../components/BgWhiteRight'
import BgWhiteBottom from '../components/BgWhiteBottom'
import IntroStatement from '../components/IntroStatement'
import BlobWrapper from '../components/BlobWrapper'
import NavLandscape from '../components/NavLandscape'
import NavPortrait from '../components/NavPortrait'
import Statement1234Wrapper from '../components/Statement1234Wrapper'
import { ContactMenu } from '../components/ContactMenu'

export default function Home() {
  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}>
      <Head>
        <title>project heart v1.3</title>
        <link rel="icon" href="/hearticon.png"/>
      </Head>
      <Heart />
      <BgRed />
      <BgWhiteRight />
      <BgWhiteBottom />
      <div className={styles.container1}>
        <NavPortrait />
        <IntroStatement />
        <BlobWrapper />
      </div>
      <div className={styles.container2}>
        <NavLandscape />
        <Statement1234Wrapper />
      </div>
    </motion.div>
  )
}
