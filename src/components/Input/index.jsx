import PropTypes from 'prop-types'
import styles from "./Input.module.css"

const Input = ({placeholder, onChange, onBlur}) => {
  return(
    <input 
      type="text" 
      placeholder={placeholder} 
      className={styles.input}
      onChange={onChange}
      onBlur={onBlur}
      />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.function,
  onBlur: PropTypes.function,
}

export default Input