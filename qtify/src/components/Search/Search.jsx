import SearchButton from "../../assets/search-icon.svg"
import "./search.css"
export default function Search(){
    return(
        <div className="search-container">
            <form action="">
                <input type="text" className="search-input" placeholder="Search a album of your choice "/>
                <button className="search-button">
                    <img src={SearchButton} alt="Search" />
                </button>
            </form>
    </div>
    )
}