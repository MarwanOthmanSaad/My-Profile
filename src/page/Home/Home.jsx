import styles from './Home.module.css'
import img from '../../assets/images/profile.png'
import Button from '../../components/common/Button'
export default function Home(){
    return (
        <div className={`${styles.box}`} id='Home'>
            <div className={styles.title}>
                <p>I'm <span className={styles.name}>Marwan Al-Fakhri</span></p>
                <span className={styles.span}></span>
            </div>
            <div className={styles.image}>
                <img className={styles.img} src={img}/>
            </div>
            <Button text='Show my work' link='##' />
        </div>
    )
}