import {useEffect, useState} from 'react';
import style from './bodySection.module.css'

export default function bodySection(){

    const [dataFromJson, setDataFromJson] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((result) =>{
            setDataFromJson(result)
        })
        .catch((error) => {
            console.log("Error fetching: ", error.message)
        })
    },[])

    return(
        <div className={style.body}>

            {
                dataFromJson.map((data, index) => {
                    return(
                        <div className={style.container} key={index}>

                            <div className={style.image}>
                                <img src={data.url} alt={data.title}/>
                                <p className={style.name}>{data.title}</p>
                            </div>

                        </div>
                    )
                })
                
            }
                
        </div>
    )
}