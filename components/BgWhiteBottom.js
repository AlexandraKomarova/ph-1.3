import { motion } from 'framer-motion'
import styles from '../styles/BgWhiteBottom.module.css'
import { bgWhiteBottomVariants } from '../animations/bgWhiteBottomAnimations'

const BgWhiteBottom = () => {
  return (
    <motion.div
      variants={bgWhiteBottomVariants}
      initial="hidden"
      animate="visible"
      className={styles.bgWhiteBottom}>
    </motion.div>
  )
}

export default BgWhiteBottom