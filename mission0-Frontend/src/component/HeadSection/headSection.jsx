/* ============================== Import Files ============================== */
/* ======================= Component ======================= */
import style from './headSection.module.css'


/* ======================= HeadSection Function ======================= */
export default function headSection(){
    return(
        <div className={style.heading}>

            <div className={style.topic}>
                <h3>50 YEARS OF HELPING MARKETERS BE</h3>
                <h1>BRILLIANT</h1>
            </div>
            
        </div>
    )
}