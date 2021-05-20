import { motion } from 'framer-motion'
import styles from '../styles/Heart.module.css'
import { heartVarinats } from '../animations/heartAnimations'

const Heart = () => {
  return (
    <motion.img
      variants={heartVarinats}
      initial="initial"
      animate="animate"
    className={styles.firstHeart}
    src="hearticon.png" alt="heart image"/>
  )
}

export default Heart
