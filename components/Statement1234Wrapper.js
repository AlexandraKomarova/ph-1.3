import Dots from './Dots'
import Statement1234 from '../components/Statement1234'
import styles from '../styles/Statement1234Wrapper.module.css'

const Statement1234Wrapper = () => {
  return (
    <div className={styles.statement1234Wrapper}>
      <Dots />
      <Statement1234 />
    </div>
  )
}

export default Statement1234Wrapper
