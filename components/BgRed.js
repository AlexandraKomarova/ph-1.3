import { motion } from 'framer-motion'
import styles from '../styles/BgRed.module.css'
import { bgRedVariants } from '../animations/bgRedAnimations'

const BgRed = () => {
  return (
    <motion.div
      variants={bgRedVariants}
        initial="hidden"
        animate="visible"
      className={styles.bgRed}
    >
    </motion.div>
  )
}

export default BgRed
