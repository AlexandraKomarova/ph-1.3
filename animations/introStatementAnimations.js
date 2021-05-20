export const introStatementPart1Variants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 6
  },
  visible: {
    
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 3.1,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const introStatementPart2Variants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 4.2,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const introStatementPart3Variants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 5.2,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}