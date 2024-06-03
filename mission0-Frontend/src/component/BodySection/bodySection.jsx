/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import {useEffect, useState} from 'react';

/* ======================= Component ======================= */
import style from './bodySection.module.css'
import SearchBar from './Searchbar/searchbar.jsx'
import DataFromJson from './DataFromJson/dataFromJson.jsx'
import Pagination from './Pagination/pagination.jsx'


export default function bodySection(){

    /* ==================== Const Variable ===================== */
    const [dataFromJson, setDataFromJson] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(12)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage


    function checkCurrentPost(dataFromJson){
        if (dataFromJson.slice > 0){
            return currentPosts = dataFromJson.slice(firstPostIndex, lastPostIndex)
        }
        else{
            return currentPosts = 1
        }
    }

    /* ================== Data Fetch From API ================== */
    useEffect(() => {
        fetch(`http://localhost:5000/api/coins`)
        .then((response) => {
            if(!response.ok){
                throw new Error("Network response was not ok " + response.status)
            }
            response.json()
        })
        .then((result) =>{
            setDataFromJson(result)
        })
        .catch((error) => {
            console.log("Error fetching: ", error.message)
        })
    },[])


    /* ======================== Display ======================== */
    return(
        <div className='bodySection'>

            <div className={style.searchbar}>
                <SearchBar />
                <p>Search Result</p>
            </div>

            <hr />
            <div className={style.container}>
                {
                    dataFromJson.length > 0 ?
                        (
                            <>
                                <DataFromJson dataFromJson={checkCurrentPost} />
                                <Pagination totalPosts={dataFromJson.length} 
                                            postsPerPage={postsPerPage} 
                                            setCurrentPage={setCurrentPage}
                                            currentPage={currentPage}
                                />
                            </>
                        )
                    :(<p>Loading data</p>)
                }
            </div>

        </div>
    )
}