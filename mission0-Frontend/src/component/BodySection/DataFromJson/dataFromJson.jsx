/* ============================== Import Files ============================== */
/* ======================= Component ======================= */
import Card from '../Card/card.jsx'
import style from './dataFromJson.module.css'


/* ======================= DataFromJson Function ======================= */
export default function dataFromJson({dataFromJson}){
    return(
        <div className={style.jsonData}>

            {
                dataFromJson?.map((data, index) => {
                    return(
                        <Card
                            key={index}
                            image={data.image}
                            alt={data.name}
                            name={data.name}
                            currentPrice={data.current_price}
                        />
                    )
                })
            }

        </div>
    )
}