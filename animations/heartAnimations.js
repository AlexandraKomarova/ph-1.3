export const heartVarinats = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: [0, 1, 1, 1, 1, 1, 1, 0],
    rotate: [0, 0, 0, 15, 0, 0, 0, 0],
    scale: [1, 1, 1.1, 1, 1, 1, 1, 1],
    transition: {
      duration: 1.5,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}