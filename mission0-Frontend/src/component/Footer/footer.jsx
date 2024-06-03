/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import style from './footer.module.css'


/* ================== Footer Function ==================== */
export default function footer(){
    return(
        <div className={style.footer}>
            <p>©2024 Marketing Association | All right reserved</p>
            <p>Legal information</p>
            <p>Privacy information</p>
            <p>Developed by Engaging Partners</p>    
        </div>
    )
}