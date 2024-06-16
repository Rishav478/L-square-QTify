import SearchButton from "../../assets/search-icon.svg"
import styles from"./search.module.css"
export default function Search(){
    return(
        <div className={styles.searchContainer}>
            <form action="">
                <input type="text" className={styles.searchInput} placeholder="Search a album of your choice "/>
                <button className={styles.searchButton}>
                    <img src={SearchButton} alt="Search" />
                </button>
            </form>
    </div>
    )
}