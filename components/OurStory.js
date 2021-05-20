import { useEffect } from 'react'

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import styles from '../styles/OurStory.module.css'

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
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

const OurStory = () => {
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
      >
      <motion.div className={styles.wrapper}
      ref={contentRef}
      variants={containerVariants}
      animate={animation}
      initial="hidden">
        <h1 className={styles.ourStory}>Our Story</h1>
        <p>Project Heart was born right in the beginning of the shift of ages and consciousness, according to the MAYAN prophecies, in Tulum Mexico.</p>
        <p>True to its `Project` name, since its foundation in 2014, it has been an evolving community without borders, beyond borders with members and events all over the world. Project Heart engenders high-vibration environments of learning, love, and support among and for the members of our community.</p>
        <p>`SiX SENSES` and `HEARTRIBE` gatherings in Tulum and Turkey, plus several smaller events throughout the world were pillars of cementing relationships, opportunities for our globally-minded nomadesque community members to convene and cultivate the positive, heart-based energies, cosmic heart connections, and playfulness that our community holds dear.</p>
      </motion.div>
    </motion.div>
  )
}

export default OurStory
