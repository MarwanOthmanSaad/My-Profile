import styles from './About.module.css'
import AboutImg from '../../assets/images/about.png'
import Skills from './components/Skills'




export default function About(){
    return(
        <div className={styles.About} id='About'>
            <p className={styles.titleAbout}>Know Who <span className={styles.colorSpan}>I'M</span></p>
            <div className={styles.contentAbout}>
                <div className={styles.boxtext}>
                    <p>I’m <span className={styles.colorSpan}>Marwan Al-Fakhri </span> from <span className={styles.colorSpan}>Libya</span>, <span className={styles.colorSpan}>20 years</span> old.</p>
                    <p>I’m a student at the Faculty of <span className={styles.colorSpan}>IT, Misrata University</span></p>
                    <p>I’m <span className={styles.colorSpan}>looking</span> for a job opportunity in Misrata.</p>
                    <p>I love <span className={styles.colorSpan}>development</span> and <span className={styles.colorSpan}>research</span> in the world of <span className={styles.colorSpan}>programming</span>.</p>
                </div>
                <div className={styles.boxImg}>
                    <img src={AboutImg} alt="" />
                </div>
            </div>
            <p className={styles.titleAbout}>Professional <span className={styles.colorSpan}>Skillset</span></p>
            <Skills />
        {/* ’ */}
        </div>
    )
}