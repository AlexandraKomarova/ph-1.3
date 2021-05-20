import { motion } from 'framer-motion'
import styles from '../styles/BgWhiteRight.module.css'
import { bgWhiteRightVariants } from '../animations/bgWhiteRightAnimations'

const BgWhiteRight = () => {
  return (
    <motion.div
      variants={bgWhiteRightVariants}
      initial="hidden"
      animate="visible"
      className={styles.bgWhiteRight}>
    </motion.div>
  )
}

export default BgWhiteRight
