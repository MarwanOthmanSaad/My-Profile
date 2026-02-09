import styles from './Project.module.css'
import LocationIcon from '../../assets/icons/LocationIcon'
import ImgIcon from '../../assets/icons/ImgIcon.jsx'
import { IconHtml, IconJs, IconCss, IconMogodb, IconReact , BgProject, IconArrow, IconGit, IconGitHub, ImageProject } from '../../assets/icons/AllIcons.js'

export default function Project(){
    const ArrayProject=[
        {
            id: 0 ,
            img: ImageProject,
            titleProject: 'لا يوجد محتوى ...',
            contentProject:'',
            tools:[IconHtml , IconJs , IconCss  ,IconMogodb],
            linkLive:'######',
            linkGitHub:'#'
        },
        
    ]

    const Projects = ArrayProject.map((project)=>{
        const Tools = project.tools.map((tool , index)=>{
            return (
                <div key={index} className={styles.BoxImgTool}><img className={styles.Img} src={tool} alt="" /></div>
            )
        })
        return(
            <div className={styles.OneProject} key={project.id} id='Project'>
                <div className={styles.boxImgProject}>
                    <div>
                        <img src={BgProject} alt="" />
                        <div className={styles.img1}>
                            <img src={project.img}/>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.content_title}>{project.titleProject}</p>
                    <p className={styles.content_description}>{project.contentProject}</p>
                </div>
                <div className={styles.bottomLinks}>
                    <div className={styles.Tools}>
                        {Tools}
                    </div>
                    <div className={styles.Links}>
                        <a href={project.linkGitHub} className={styles.buttonLinks} ><img style={{height:'100%'}} src={IconGitHub} alt="" /> GitHub</a>
                        <a href={project.linkLive} className={styles.buttonLinks}><LocationIcon className={styles.iconLive}/></a>
                    </div>
                </div>
                
            </div>
        )
    })
    return (
        <div className={styles.Project}>
            <p className={styles.titleProject}>My <span className={styles.colorSpan}>Projects</span></p>
            <div className={styles.AllProject}>
                {Projects} 
            </div>
        </div>
        
    )
}