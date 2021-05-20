import { motion } from 'framer-motion'
import styles from '../styles/Statement1234.module.css'
import { 
  statement1Variants, statement1DivVariants, 
  statement2Variants, statement2DivVariants,
  statement3Variants, statement3DivVariants,
  statement4Variants, statement4DivVariants } from '../animations/Statement1234Animations'

const Statement1234 = () => {
  return (
    <>
      <motion.div
      // statements wrappers are needed to control how statements exit
      // STATEMENT 1 WRAPPER
      className={styles.statement1234}
      variants={statement1DivVariants}
      initial="initial"
      animate="animate">
        <motion.div
        // STATEMENT 1
        variants={statement1Variants}
        initial="hidden"
        animate="visible">hearts connected by the desire to leave a positive trace in the world
        </motion.div>
      </motion.div>
      <motion.div
      // STATEMENT 2 WRAPPER
      className={styles.statement1234}
      variants={statement2DivVariants}
      initial="initial"
      animate="animate">
        <motion.div
        // STATEMENT 2
        variants={statement2Variants}
        initial="hidden"
        animate="visible">in the pursuit of a more creative and heartfelt existence
        </motion.div>
      </motion.div>
      <motion.div 
      // STATEMENT 3 WRAPPER
      className={styles.statement1234}
      variants={statement3DivVariants}
      initial="initial"
      animate="animate">
        <motion.div
        // STATEMENT 3
        variants={statement3Variants}
        initial="hidden"
        animate="visible">an organizational template for how we interact in the world
        </motion.div>
      </motion.div>
      <motion.div  
      // STATEMENT 4 WRAPPER
      className={styles.statement1234}
      variants={statement4DivVariants}
      initial="initial"
      animate="animate">
        <motion.div
        // STATEMENT 4
        variants={statement4Variants}
        initial="hidden"
        animate="visible">a semi-structured canvas upon which the community members contribute their talents
        </motion.div>
      </motion.div>
    </>
  )
}

export default Statement1234
