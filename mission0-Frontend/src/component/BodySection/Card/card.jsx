/* ============================== Import Files ============================== */
/* ======================= Component ======================= */
import style from './card.module.css'


/* ================== Card Function ==================== */
export default function Card({image, name, currentPrice}){
    return(

        <div className={style.card}>

            <div className={style.card_image}>
                <img src={image} alt={name} />
            </div>

            <div className={style.card_info}>
                <h2>{name}</h2>
                <h5>{currentPrice}</h5>
            </div>

        </div>
    )
}