import { motion } from 'framer-motion'
import styles from '../styles/BlobWrapper.module.css'
import ProjectHeart from './ProjectHeart'
import { blobVariants } from '../animations/blobAnimations'

const BlobWrapper = () => {
  return (
    <motion.div
      // BLOB
      variants={blobVariants}
      initial="hidden"
      animate="visible"
      className={styles.blob}>
      <ProjectHeart />
    </motion.div> 
  )
}

export default BlobWrapper
