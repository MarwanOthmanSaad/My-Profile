import styles from './Skills.module.css'

import IconHtml from '../../../assets/icons/html.png'
import IconCss from '../../../assets/icons/css.png'
import IconPython from '../../../assets/icons/python.png'
import IconJs from '../../../assets/icons/javascript.png'
import IconNodeJs from '../../../assets/icons/js.png'
import IconMogodb from '../../../assets/icons/mongodb.png'
import IconGit from '../../../assets/icons/git.png'
import IconGitHub from '../../../assets/icons/github.png'
import IconExpress from '../../../assets/icons/express.png'
import IconReact from '../../../assets/icons/react.png'





export default function Skills(){
    
    const ArraySkills = [
        {
            id: 0 ,
            nameSkills: 'Html',
            iconSkills: IconHtml 
        },
        {
            id: 1 ,
            nameSkills: 'Css',
            iconSkills: IconCss 
        },
        {
            id: 2 ,
            nameSkills: 'Python',
            iconSkills: IconPython 
        },
        {
            id: 3 ,
            nameSkills: 'Js',
            iconSkills: IconJs 
        },
        {
            id: 4 ,
            nameSkills: 'NodeJs',
            iconSkills: IconNodeJs 
        },
        {
            id: 5 ,
            nameSkills: 'Mongodb',
            iconSkills: IconMogodb 
        },
        {
            id: 6 ,
            nameSkills: 'Git',
            iconSkills: IconGit 
        },
        {
            id: 7 ,
            nameSkills: 'Github',
            iconSkills: IconGitHub 
        },
        {
            id: 8 ,
            nameSkills: 'Express',
            iconSkills: IconExpress 
        },
        {
            id: 9 ,
            nameSkills: 'React',
            iconSkills: IconReact 
        },
    ]

    const AllSkills = ArraySkills.map((skills)=>{
        return(
            <div key={skills.id} className={styles.oneSkills}>
                <div className={styles.boxIcon}>
                    <img src={skills.iconSkills} alt="" />
                </div>
                <div className={styles.nameSkills}>
                    {skills.nameSkills}
                </div>
            </div>
        )
    })
    return(
        <div className={styles.boxAllSkills}>
            {AllSkills}
        </div>
    )
}