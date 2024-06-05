/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import {useQuery} from 'react-query'
import Typewriter from 'typewriter-effect'

/* ======================= Component ======================= */
import style from './searchbar.module.css'
import fetchData from '../FetchData/fetchData.jsx'


export default function Searchbar({setResults}){

    const [userInput, setUserInput] = useState('')
    const [data, setData] = useState([])
    const {dataFromAPI, isLoading, error} = useQuery('crypto', fetchData())

    /* ==================== Handle Change ==================== */
    const handleChange = (event) => {
        event.preventDefault()
        setUserInput(event.target.value)
        setData(dataFromAPI)
        console.log(data)
    }
    

    /* =================== Fetch Unsuccessful ================== */
    if(isLoading){
        return( 
                <h1 className={style.loading}> 
                    <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:50,
                            strings:["Loading ..."]
                        }}
                    /> 
                </h1>
        )
    }

    else if(error){
        return( 
            <h1 className={style.loading}> 
                <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:50,
                        strings:["Error Data Fetching ..."]
                    }}
                /> 
            </h1>
    )
    }

    /* ======================== Display ======================== */
    return(
            <div className={style.inputWrapper}>
                <button className={style.iconButton}><FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/></button>
                <input
                    type='text' 
                    placeholder='Type to search...'  
                    onChange={handleChange}
                    value={userInput}    
                />
            </div>
    )
}