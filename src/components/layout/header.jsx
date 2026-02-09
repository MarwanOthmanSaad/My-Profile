import styles from './header.module.css'
import { useState , useEffect} from 'react';

export default function Header() {
  const [position , setPosition] = useState('-138px')
  const [scrollY , setScrollY] = useState(window.scrollY)
  const [isVisible, setIsVisible] = useState(true);


  function funSetPosition(pos){
    setPosition(pos)
  }

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // تنظيف الذاكرة عند إغلاق المكون
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [scrollY]);

  return (
    <>
      <header className={styles.Header} style={{'--position' : position , transform: isVisible ?'translate( -50% , 30px)':'translate( -50% , -70px)'}}>
        <a href="#Home" onClick={()=>{funSetPosition('-134px')}} style={{color :position=='-134px'?"var(--active-bar)":"" }}>Home</a>
        <a href="#About" onClick={()=>{funSetPosition('-53px')}} style={{color :position=='-53px'?"var(--active-bar)":"" }}>Abuot</a>
        <a href="#Project" onClick={()=>{funSetPosition('36px')}} style={{color :position=='36px'?"var(--active-bar)":"" }}>Project</a>
        <a href="#Contact" onClick={()=>{funSetPosition('125px')}} style={{color :position=='125px'?"var(--active-bar)":"" }}>Contact</a>
      </header>
    </>
    
  );
}
