export const projectHeartVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 2,
    // x: -20
  },
  visible: {
    // x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 8,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    }
  }
}