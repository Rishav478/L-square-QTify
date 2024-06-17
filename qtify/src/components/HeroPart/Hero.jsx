import heroImg from "../../assets/hero_headphones.png"
import styles from "./hero.module.css"





export default function HeroSec(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.herotitle}>
                <h1> 100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img className={styles.heroimg} src={heroImg} alt="headphone" />
        </div>
    )
}