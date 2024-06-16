import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./navbar.module.css"



export default function NavBar() {
    return(
        <nav className={styles.navbar}>
            <Logo/>
            <Search/>
            <Button/>
        </nav>
    )
    
}