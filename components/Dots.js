import { motion } from 'framer-motion'
import styles from '../styles/Dots.module.css'
import { firstDotVariants, secondDotVariants, thirdDotVariants, fourthDotVariants } from '../animations/dotsAnimations'

const Dots = () => {
  return (
    <div className={styles.dots}>
      <motion.span 
        variants={firstDotVariants}
        initial="hidden"
        animate="visible"></motion.span>
      <motion.span 
        variants={secondDotVariants}
        initial="hidden"
        animate="visible"></motion.span>
      <motion.span 
        variants={thirdDotVariants}
        initial="hidden"
        animate="visible"></motion.span>
      <motion.span
        variants={fourthDotVariants}
        initial="hidden"
        animate="visible"></motion.span>
    </div>
  )
}

export default Dots
