import styles from './Contact.module.css'
import Button from '../../components/common/Button'

export default function Contact(){
    return(
        <div className={styles.Contact} id='Contact'>
            <div className={styles.titleContact}>
                <p className={styles.topTitleContact}>Want to build your website?</p>
                <p className={styles.bottomTitleContact}>Contact me to achieve your goal.</p>
                <Button className={styles.Button} text='Go to email'/>
            </div>
            <footer className={styles.footer}>
                <div className={styles.Copyright}>
                    Copyright © 2026 Marwan Al-Fakhri
                </div>
                <div className={styles.Mylinks}>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-whatsapp"></i></a>

                </div>
            </footer>
        </div>
    )
}