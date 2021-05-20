import Link from "next/link";
import { motion } from 'framer-motion'
import styles from '../styles/AboutNav.module.css'
import { aboutNavVariants, aboutNavCommunityVariants, aboutNavHomeVariants } from '../animations/aboutNavAnimations'

const AboutNav = () => {
  return (
    <motion.nav 
      className={styles.aboutNav}
      variants={aboutNavVariants}
      initial="hidden"
      animate="visible">
      
        <motion.div
          variants={aboutNavCommunityVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={styles.community}>community
        </motion.div>
      
       <Link href='/'>
        <motion.div
          variants={aboutNavHomeVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={styles.home}>home
        </motion.div>
      </Link>
    </motion.nav>
  )
}

export default AboutNav
