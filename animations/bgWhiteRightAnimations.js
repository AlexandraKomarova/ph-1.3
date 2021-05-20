export const bgWhiteRightVariants = {
  hidden: {
    opacity: 0,
    x: 1000
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 9.2,
      duration: 1,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}