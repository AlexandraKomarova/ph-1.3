export const containerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, y: 72 
  },
}

export const timeTravelVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0,
    y: 12
  },
}

export const firstCircleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const year2013Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      duration: 0.6, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const firstLineVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 2,
      duration: 1.3,
      ease: [0.6, 0.05, -0.01, 0.9]
      // type: 'spring',
      // mass: 0.6,
      // stiffness: 50,
      // velocity: 2
    }
  }
}

export const text2013Variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 2,
      duration: 0.7,
      // ease: [0.6, 0.05, -0.01, 0.9]
      type: 'spring',
      mass: 0.6,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const photo2013Variants = {
  hidden: {
    y: 10,
    opacity: 0
  },
  visible: {
    y: 0,
    scale: [1, 1.05, 1],
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 0.8,
      type: 'spring',
      mass: 0.6,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const secondCircleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 3.3,
      duration: 0.6,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const year2014Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.9,
      duration: 0.6, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const secondLineVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 4.5,
      duration: 1.3,
      type: 'spring',
      mass: 0.6,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const text2014Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4.5,
      duration: 0.7, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const photo2014Variants = {
  visible: {
    scale: [1, 1.05, 1],
    opacity: 1,
    y: 0,
    transition: {
      delay: 5,
      duration: 0.8, 
      // ease: [0.6, 0.05, -0.01, 0.9] 
      type: 'spring',
      mass: 0.6,
      stiffness: 50,
      velocity: 2
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const thirdCircleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 5.8,
      duration: 0.6,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const yearJanuary2015Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 6.4,
      duration: 0.6, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

// export const thirdLineVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       delay: 9,
//       duration: 1,
//       type: 'spring',
//       mass: 0.6,
//       stiffness: 50,
//       velocity: 2
//     }
//   }
// }

export const thirdLineVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 7,
      duration: 1.3,
      type: 'spring',
      mass: 0.6,
      stiffness: 50,
      velocity: 2
    }
  }
}

export const textJanuary2015Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 7,
      duration: 0.6, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const photoJanuary2015Variants = {
  visible: {
    scale: [1, 1.05, 1],
    opacity: 1,
    y: 0,
    transition: {
      delay: 7.4,
      duration: 0.8, 
      type: 'spring',
      mass: 0.6,
      stiffness: 50,
      velocity: 2
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const fourthCircleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 8.2,
      duration: 0.6,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const yearNovember2015Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 8.8,
      duration: 0.6, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const textNovember2015Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 9.4,
      duration: 0.6, 
      ease: [0.6, 0.05, -0.01, 0.9] 
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}

export const photoNovember2015Variants = {
  visible: {
    scale: [1, 1.05, 1],
    opacity: 1,
    y: 0,
    transition: {
      delay: 10,
      duration: 0.8, 
      type: 'spring',
      mass: 0.6,
      stiffness: 50,
      velocity: 2
    },
  },
  hidden: { 
    opacity: 0, 
    y: 10 
  },
}