import Link from "next/link";
import { useEffect } from 'react'

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import styles from '../styles/About.module.css'

//components
import AboutNav from '../components/AboutNav'
import FactsTable from '../components/FactsTable'
import OurStory from '../components/OurStory'
import TimeTravel from '../components/TimeTravel'
import { videoBlobVariants } from '../animations/videoBlobAnimation'

export const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const imgVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.7,
      ease: [0.6, 0.05, -0.01, 0.9]
      // type: 'spring',
      // damping: 6,
      // mass: 0.5,
      // stiffness: 50,
      // velocity: 2
    }
  }
}

const about = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  useEffect(() => {
    if(inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <motion.div
      className={styles.container} 
      variants={containerVariants} 
      initial="hidden"
      animate="visible">
      <motion.video 
        className={styles.videoBlob}
        src="video.mp4"
        height='100%' 
        width='100%'
        loop
        autoPlay
        muted
        variants={videoBlobVariants}
        initial="hidden"
        animate="visible">
      </motion.video>
      <AboutNav />
      <FactsTable />
      <OurStory />
      <motion.img ref={contentRef}
      variants={imgVariants}
      animate={animation}
      initial="hidden"
      src="ph.jpeg" alt="photo" className={styles.photo}/>
      <TimeTravel />
    </motion.div>
  )
}

export default about
