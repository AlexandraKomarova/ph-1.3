export const whiteAboutVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewY: 5
  },
  visible: {
    
    opacity: 1,
    skewY: 0,
    transition: {
      delay: 6.2,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const whiteCommunityVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5,
    y: 10
  },
  visible: {
    y: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 6.3,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    }
  }
}

export const redAboutVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 10.2,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  },
  hover: {
    // backgroundPosition: 'bottom'
  }
}

export const redCommunityVariants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 10.3,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  },
  hover: {
    // backgroundColor: "#D12E49",
    // color: "#fff"
  }
}