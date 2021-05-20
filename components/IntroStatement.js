import { motion } from 'framer-motion'
import styles from '../styles/IntroStatement.module.css'
import { introStatementPart1Variants, introStatementPart2Variants, introStatementPart3Variants } from '../animations/introStatementAnimations' 

const IntroStatement = () => {
  return (
    <motion.div className={styles.introStatement}>
      <motion.div
      // PART 1
        variants={introStatementPart1Variants}
        initial="hidden"
        animate="visible"
        className={styles.part1}>intentional nomadesque community
      </motion.div>
      <div className={styles.part2part3Wrapper}>
        <motion.div
        // PART 2
          variants={introStatementPart2Variants}
          initial="hidden"
          animate="visible"
          className={styles.part2}>without borders - 
        </motion.div>
        <motion.div
        // PART 3
          variants={introStatementPart3Variants}
          initial="hidden"
          animate="visible"
          className={styles.part3}>beyond borders
        </motion.div>
      </div>
    </motion.div>
  )
}

export default IntroStatement