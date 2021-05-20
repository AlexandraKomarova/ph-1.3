export const aboutVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 6.2,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const communityVariants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 6.3,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}