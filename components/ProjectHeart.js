import { motion } from 'framer-motion'
import styles from '../styles/ProjectHeart.module.css'
import { projectHeartVariants } from '../animations/projectHeartAnimation'
import { blobHeartVariants } from '../animations/blobHeartAnimation'

const ProjectHeart = () => {
  return (
    <motion.div
    // PROJECT HEART
        variants={projectHeartVariants}
        initial="hidden"
        animate="visible"
      className={styles.projectHeart}>
      <span className={styles.project}>project</span>
      <span className={styles.heartWord}>heart</span>
      <motion.img
      // BLOB HEART
        variants={blobHeartVariants}
        initial="hidden"
        animate="visible"
      className={styles.blobHeart}
      src="hearticon.png" alt="heart image"/>
    </motion.div>
  )
}

export default ProjectHeart
