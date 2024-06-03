/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

/* ======================= Component ======================= */
import style from './searchbar.module.css'


export default function Searchbar(){

    const [userInput, setUserInput] = useState('')

    const fetchData = (value) =>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => response.json())
        .then((results) => {
            const result = results.filter((crypto) =>{
                return crypto
            })
        }) 
    }

    function handleChange(value){
        setUserInput(value)
        fetchData(value)
    }

    /* ======================== Display ======================== */
    return(

        <div className={style.inputWrapper}>
            <button className={style.iconButton}><FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/></button>
            <input placeholder='Type to search...' 
                   value={userInput} 
                   onChange={(event) => handleChange(event.target.value)}/>
        </div>
    )
}