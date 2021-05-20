import { useEffect } from 'react'

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { containerVariants, timeTravelVariants, firstCircleVariants, year2013Variants, firstLineVariants, text2013Variants, photo2013Variants,secondCircleVariants, year2014Variants, text2014Variants, secondLineVariants,photo2014Variants, thirdCircleVariants, yearJanuary2015Variants, thirdLineVariants, textJanuary2015Variants, photoJanuary2015Variants, fourthCircleVariants, yearNovember2015Variants, textNovember2015Variants, photoNovember2015Variants } from '../animations/timeTravelAnimations'
import styles from '../styles/TimeTravel.module.css'

const TimeTravel = () => {
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
      ref={contentRef}
      variants={containerVariants}
      animate={animation}
      initial="hidden">
      <div className={styles.wrapper}>
        <motion.h2 className={styles.timeTravel} variants={timeTravelVariants}>Time Travel</motion.h2>
        <motion.h4 variants={year2013Variants} className={styles.year2013}>AUGUST <span className={styles.year}>2013</span></motion.h4>
        <motion.p variants={text2013Variants} className={styles.text2013}>The little red heart felt stickers pop-up at Burning Man. Brought by Mikka from Stuttgart and hand it over to Silvi & Ani, that have just met, to spread the love accross playa.</motion.p>
        <motion.img variants={photo2013Variants} src="ph.jpeg" alt="" className={styles.photo2013}/>
        <motion.h4 variants={year2014Variants} className={styles.year2014}>JANUARY <span className={styles.year}>2014</span></motion.h4>
        <motion.p variants={text2014Variants} className={styles.text2014}>TA group of 8 friends reunite post Burning Man. After chasing the alternative ways of getting together and enjoying music during BPM festival, they decide to take a road trip in the search of a misterious community in Palenque, Chiapas, called “El Jardin del Eden”. When they arrive they get to experience a most welcoming and warm atmosphere which planted the seed for Ani & Silvi of recreating that scenario, in some way. The name PROJECT HEART was heard for the first time.</motion.p>
        <motion.img variants={photo2014Variants} src="ph.jpeg" alt="" className={styles.photo2014}/>
        <motion.h4 variants={yearJanuary2015Variants} className={styles.yearJanuary2015}>JANUARY <span className={styles.year}>2015</span></motion.h4>
        <motion.p variants={textJanuary2015Variants} className={styles.textJanuary2015}>First PROJECT HEART anniversary  in Mexico,. this time a group of more than 30 get together to celebrate life and spread kindness and love. </motion.p>
        <motion.img variants={photoJanuary2015Variants} src="ph.jpeg" alt="" className={styles.photoJanuary2015}/>
        <motion.h4 variants={yearNovember2015Variants} className={styles.yearNovember2015}>NOVEMBER <span className={styles.year}>2015</span></motion.h4>
        <motion.div variants={textNovember2015Variants} className={styles.textNovember2015}>
          <p>Motivated by Burning Man’s afterglow and by the desire of helping their new burner friend VALENTIN GINIES to find a DJ gig in NY, Ula & Ani decide to organize first official event in Brooklyn, called  HEART DECOMPRESSION.</p>
          <p>An intimate gathering of 100 in an uncoventional place set the tone for different kind of music events, where music is as important as the community building. Apart from the local HeArtist friends we also had 2 german DJs joinig us, JEREMAIER & LA LOC.</p>
        </motion.div>
        <motion.img variants={photoNovember2015Variants} src="ph.jpeg" alt="" className={styles.photoNovember2015}/>
        <motion.svg variants={firstCircleVariants} className={styles.firstCircle} width="23" height="23" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.5" cy="8.5" r="8.5" fill="white"/>
        </motion.svg>
        <svg className={styles.firstLine} width="47" height="177" viewBox="0 0 47 257" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={firstLineVariants} d="M21.6489 1C-41.8511 130.5 63.1489 194 44.1489 236" strokeWidth="3" stroke="white"/>
        </svg>
        <motion.svg variants={secondCircleVariants} className={styles.secondCircle} width="23" height="23" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.5" cy="8.5" r="8.5" fill="white"/>
        </motion.svg>
        <svg className={styles.secondLine} width="79" height="279" viewBox="0 0 79 329" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={secondLineVariants} d="M70 0.5C114.5 122 -41 135.5 13 328.5" strokeWidth="2.5" stroke="white"/>
        </svg>
        <motion.svg variants={thirdCircleVariants} className={styles.thirdCircle} width="23" height="23" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.5" cy="8.5" r="8.5" fill="white"/>
        </motion.svg>
        <svg className={styles.thirdLine} width="79" height="309" viewBox="0 0 79 329" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={thirdLineVariants} d="M70 0.5C114.5 122 -41 135.5 13 328.5" strokeWidth="2" stroke="white"/>
        </svg>
        <motion.svg variants={fourthCircleVariants} className={styles.fourthCircle} width="23" height="23" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8.5" cy="8.5" r="8.5" fill="white"/>
        </motion.svg>
      </div>
    </motion.div>
  )
}

export default TimeTravel
