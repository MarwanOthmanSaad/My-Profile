import styles from './Button.module.css'
import IconLocation from '../../assets/icons/LocationIcon'
const Button = ({className , text , link})=>{
    return (
        <a href={link} className={`${styles.button} ${className}`}>
            <p>{text} <IconLocation className={styles.icon}/></p>
        
        </a>
    )
}

export default Button