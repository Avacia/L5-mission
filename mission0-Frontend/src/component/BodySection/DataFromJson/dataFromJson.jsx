/* ============================== Import Files ============================== */
/* ======================= Component ======================= */
import Card from '../Card/card.jsx'


/* ======================= DataFromJson Function ======================= */
export default function dataFromJson({dataFromJson}){
    return(
        <div className='jsonData'>

            {
                dataFromJson.map((data, index) => {
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