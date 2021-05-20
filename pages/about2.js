import Link from "next/link";
import { motion } from 'framer-motion'
import styles from '../styles/About2.module.css'

export const testVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 9.2,
      duration: 1,
      // type: 'spring',
      // mass: 0.4,
      // stiffness: 50,
      // velocity: 2
    }
  }
}

const about = () => {
  return (
    <motion.div className={styles.container} variants={testVariants} initial="hidden"
        animate="visible">
      <div className={styles.about}>contact the Fairy at: <br/> Hada Nómada <br/> annie.anca@gmail.com</div>
      <Link href='/'><div className={styles.home}>back home</div></Link>
    </motion.div>
  )
}

export default about
