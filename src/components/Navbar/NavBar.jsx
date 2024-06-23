import Button from "../Button/Button";
import Logo from "../../assets/logo.png";
import Search from "../Search/Search";
import styles from "./navbar.module.css"



export default function NavBar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logoDiv}><img  src={Logo} alt="logo" width={67}/></div>
            <Search/>
            <Button children="Give Feedback"/>
        </nav>
    )
    
}