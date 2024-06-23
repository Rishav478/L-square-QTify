import styles from "./button.module.css"



const Button = ({children}) => {
    return (
      <button className={styles.feedback} >{children}</button>
    )
  }
  
  export default Button