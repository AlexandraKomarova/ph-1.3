// about page nav

export const aboutNavVariants = {
  hidden: {
    opacity: 0,
    y: -1000
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.8,
      type: 'spring',
      mass: 0.4,
      stiffness: 60,
      velocity: 2
    }
  }
}

// community button

export const aboutNavCommunityVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 1.9,
      duration: 0.4,
      type: 'spring',
      mass: 0.4,
      stiffness: 70,
      velocity: 2
      // bounce: 0.35
    }
  }
}

// home button

export const aboutNavHomeVariants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 2.4,
      duration: 0.4,
      type: 'spring',
      mass: 0.4,
      stiffness: 70,
      velocity: 2,
      // bounce: 0.35
    }
  }
}