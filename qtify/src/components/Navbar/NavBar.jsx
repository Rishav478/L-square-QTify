import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import "./navbar.css"


export default function NavBar() {
    return(
        <nav className="navbar">
            <Logo/>
            <Search/>
            <Button/>
        </nav>
    )
    
}