/* ============================== Import Files ============================== */
/* ======================= Component ======================= */
import {motion} from 'framer-motion'

/* ======================= Component ======================= */
import style from './card.module.css'


/* ================== Card Function ==================== */
export default function Card({image, name, currentPrice}){
    return(

        <motion.div 
            whileHover="hover"
            variants={{
                hover:{
                    scale:1.2
                }
            }}
            transition={{
                duration:0.5,
                ease:"backInOut"
            }}
            className={style.card}>

            <div className={style.card_image}>
                <img src={image} alt={name} />
            </div>

            <div className={style.card_info}>
                <h2>{name}</h2>
                <h5>USD ${currentPrice}</h5>
            </div>

        </motion.div>
    )
}