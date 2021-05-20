import { motion } from 'framer-motion'
import styles from '../styles/FactsTable.module.css'
import { estVariants, locationsWordVariants,locationsTens0Variants, locationsTens1Variants, locationsTens2Variants, locationsTens3Variants, locationsOnes0Variants,  locationsOnes1Variants, locationsOnes2Variants, locationsOnes3Variants, 
locationsOnes4Variants, membersWordVariants, membersThousands0Variants, membersThousands1Variants,membersThousands2Variants, membersHundreds0Variants, membersHundreds1Variants, membersHundreds2Variants, membersHundreds3Variants, membersHundreds4Variants, membersHundreds5Variants, membersHundreds6Variants, membersHundreds7Variants, membersHundreds8Variants, membersHundreds9Variants, membersTens0Variants, membersTens1Variants, membersTens2Variants, membersTens3Variants, membersTens4Variants, membersTens5Variants, membersOnes0Variants, bordersWordVariants, noneVariants, loveVariants, infinityVariants } from '../animations/factsTableAnimations'

const FactsTable = () => {
  return (
    <div className={styles.table}>
      <motion.div 
        className={styles.est}
        variants={estVariants}
        initial="hidden"
        animate="visible">EST: 
        <span className={styles.year}> 2014</span>
      </motion.div>
      <div className={styles.locations}>
        <motion.div 
          className={styles.locationsWord}
          variants={locationsWordVariants}
          initial="hidden"
          animate="visible"> LOCATIONS:
        </motion.div>
        <motion.div 
          className={styles.locationsTens0}
          variants={locationsTens0Variants}
          initial="hidden"
          animate="visible">0
        </motion.div>
        <motion.div 
          className={styles.locationsTens1}
          variants={locationsTens1Variants}
          initial="hidden"
          animate="visible">1
        </motion.div>
        <motion.div 
          className={styles.locationsTens2}
          variants={locationsTens2Variants}
          initial="hidden"
          animate="visible">2
        </motion.div>
        <motion.div 
          className={styles.locationsTens3}
          variants={locationsTens3Variants}
          initial="hidden"
          animate="visible">3
        </motion.div>
        <motion.div 
          className={styles.locationsOnes0}
          variants={locationsOnes0Variants}
          initial="hidden"
          animate="visible">0
        </motion.div>
        <motion.div 
          className={styles.locationsOnes1}
          variants={locationsOnes1Variants}
          initial="hidden"
          animate="visible">1
        </motion.div>
        <motion.div 
          className={styles.locationsOnes2}
          variants={locationsOnes2Variants}
          initial="hidden"
          animate="visible">2
        </motion.div>
        <motion.div 
          className={styles.locationsOnes3}
          variants={locationsOnes3Variants}
          initial="hidden"
          animate="visible">3
        </motion.div>
        <motion.div 
          className={styles.locationsOnes4}
          variants={locationsOnes4Variants}
          initial="hidden"
          animate="visible">4
        </motion.div>
      </div>
      <div className={styles.members}>
        <motion.div 
          className={styles.membersWord}
          variants={membersWordVariants}
          initial="hidden"
          animate="visible"> MEMBERS:
        </motion.div>
        <motion.div 
          className={styles.membersThousands0}
          variants={membersThousands0Variants}
          initial="hidden"
          animate="visible"> 0
        </motion.div>
        <motion.div 
          className={styles.membersThousands1}
          variants={membersThousands1Variants}
          initial="hidden"
          animate="visible"> 1
        </motion.div>
        <motion.div 
          className={styles.membersThousands2}
          variants={membersThousands2Variants}
          initial="hidden"
          animate="visible"> 2
        </motion.div>
        <motion.div 
          className={styles.membersHundreds0}
          variants={membersHundreds0Variants}
          initial="hidden"
          animate="visible"> 0
        </motion.div>
        <motion.div 
          className={styles.membersHundreds1}
          variants={membersHundreds1Variants}
          initial="hidden"
          animate="visible"> 1
        </motion.div>
        <motion.div 
          className={styles.membersHundreds2}
          variants={membersHundreds2Variants}
          initial="hidden"
          animate="visible"> 2
        </motion.div>
        <motion.div 
          className={styles.membersHundreds3}
          variants={membersHundreds3Variants}
          initial="hidden"
          animate="visible"> 3
        </motion.div>
        <motion.div 
          className={styles.membersHundreds4}
          variants={membersHundreds4Variants}
          initial="hidden"
          animate="visible"> 4
        </motion.div>
        <motion.div 
          className={styles.membersHundreds5}
          variants={membersHundreds5Variants}
          initial="hidden"
          animate="visible"> 5
        </motion.div>
        <motion.div 
          className={styles.membersHundreds6}
          variants={membersHundreds6Variants}
          initial="hidden"
          animate="visible"> 6
        </motion.div>
        <motion.div 
          className={styles.membersHundreds7}
          variants={membersHundreds7Variants}
          initial="hidden"
          animate="visible"> 7
        </motion.div>
        <motion.div 
          className={styles.membersHundreds8}
          variants={membersHundreds8Variants}
          initial="hidden"
          animate="visible"> 8
        </motion.div>
        <motion.div 
          className={styles.membersHundreds9}
          variants={membersHundreds9Variants}
          initial="hidden"
          animate="visible"> 9
        </motion.div>
        <motion.div 
          className={styles.membersTens0}
          variants={membersTens0Variants}
          initial="hidden"
          animate="visible"> 0
        </motion.div>
        <motion.div 
          className={styles.membersTens1}
          variants={membersTens1Variants}
          initial="hidden"
          animate="visible"> 1
        </motion.div>
        <motion.div 
          className={styles.membersTens2}
          variants={membersTens2Variants}
          initial="hidden"
          animate="visible"> 2
        </motion.div>
        <motion.div 
          className={styles.membersTens3}
          variants={membersTens3Variants}
          initial="hidden"
          animate="visible"> 3
        </motion.div>
        <motion.div 
          className={styles.membersTens4}
          variants={membersTens4Variants}
          initial="hidden"
          animate="visible"> 4
        </motion.div>
        <motion.div 
          className={styles.membersTens5}
          variants={membersTens5Variants}
          initial="hidden"
          animate="visible"> 5
        </motion.div>
        <motion.div 
          className={styles.membersOnes0}
          variants={membersOnes0Variants}
          initial="hidden"
          animate="visible"> 0
        </motion.div>
      </div>
      <div className={styles.borders}>
        <motion.div 
          className={styles.bordersWord}
          variants={bordersWordVariants}
          initial="hidden"
          animate="visible">
          BORDERS:
        </motion.div> 
        <motion.div 
          className={styles.none}
          variants={noneVariants}
          initial="hidden"
          animate="visible"> 
          NONE
        </motion.div>
      </div>
      <motion.div 
        className={styles.love}
        variants={loveVariants}
        initial="hidden"
        animate="visible">LOVE: 
      </motion.div>
      <svg className={styles.infinity} width="81" height="61" viewBox="0 0 41 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M20.5048 10.3273C18.881 21 2.49978 22.5 2.49989 10.3273C2.5 -1.8453 18.4999 3.98987e-06 20.5048 10.3273ZM20.5048 10.3273C22.076 2.15917e-07 38.4999 -2.32018 38.4999 10.3274C38.4999 22.9749 21.9999 21 20.5048 10.3273Z" stroke="white" strokeWidth="3.5" 
        variants={infinityVariants}
        initial="hidden"
        animate="visible"/>
      </svg>
    </div>
  )
}

export default FactsTable
