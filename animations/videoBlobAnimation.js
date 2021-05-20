// video

export const videoBlobVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1.5,
      type: 'spring',
      bounce: 0.45
    }
  }
}