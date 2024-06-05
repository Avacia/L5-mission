/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import {useState, useEffect} from 'react';
import {QueryClientProvider, QueryClient, useQuery} from 'react-query'
import Typewriter from 'typewriter-effect'
import Lottie from 'lottie-react'
import {motion} from 'framer-motion'

/* ======================= Component ======================= */
import style from './bodySection.module.css'
import SearchBar from './Searchbar/searchbar.jsx'
import SearchResults from './Searchbar/searchResults.jsx'
import DataFromJson from './DataFromJson/dataFromJson.jsx'
import Pagination from './Pagination/pagination.jsx'
import fetchData from './FetchData/fetchData.jsx'
import Crypto from './../../assets/crypto.json'
import CryptoIcon from './../../assets/cryptoIcon.json'


export default function BodySection(){

    /* ==================== Const Variable ===================== */
    const [dataFromJson, setDataFromJson] = useState([])
    const [results, setResults] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(12)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = dataFromJson.slice(firstPostIndex, lastPostIndex);
    const client = new QueryClient();


    /* ================== Data Fetch From API ================== */
    const {data, isLoading, error} = useQuery("data", fetchData())
    

    /* ================ Store Data to UseState ================= */
    useEffect(() => {
        if(data){
            setDataFromJson(data)
        }
    }, [data])


    /* ======================== Display ======================== */
    return(
        <QueryClientProvider client={client}>
            <div className='bodySection'>

                <div className={style.upperBodySection}>
                    <div className={style.leftAnimationSection}>
                        <Lottie animationData={CryptoIcon} />
                    </div>

                    <div className={style.textSection}>
                        <motion.h1
                            initial={{x: -1000}}
                            animate={{x: [0, -1000, 0, 0]}}
                            transition={{
                                duration: 5,
                                delay: 1,
                                repeat: Infinity,
                            }}
                        >
                            Crypto
                        </motion.h1>

                        <motion.h2
                            initial={{scale: 1, opacity: 1}}
                            transition={{
                                duration: 1,
                                delay: 2,
                                repeatType: "mirror"
                            }}
                            whileHover={{scale: 1, opacity: 0}}
                        >
                             is the Future
                        </motion.h2>

                        <motion.p
                            initial={{scale: 1, opacity: 1}}
                            transition={{
                                duration: 1,
                                delay: 2,
                                repeatType: "mirror"
                            }}
                            whileHover={{scale: 1, opacity: 0}}
                        >
                            This all leads to one big trend. Cryptocurrency, 
                            once only understood among a relatively fringe community of anti-establishment investors, 
                            is now becoming a household name – and quickly.
                        </motion.p>
                    </div>

                    <div className={style.rightAnimationSection}>
                        <Lottie className={style.lottieAnimation} animationData={Crypto} />
                    </div>
                </div>

                <div className={style.bottomBodySection}>
                    <div className={style.searchbar}>
                        <SearchBar setResults={setResults}/>
                        <SearchResults results={results}/>
                    </div>
                    <div className={style.container}>
                        {
                            dataFromJson.length > 0 ?
                                (
                                    <>
                                        <div className={style.card_container}>
                                            <DataFromJson dataFromJson={currentPosts} />
                                        </div>
                                        <div className={style.paginationBtn}>
                                            <Pagination 
                                                totalPosts={dataFromJson.length} 
                                                postsPerPage={postsPerPage} 
                                                setCurrentPage={setCurrentPage}
                                                currentPage={currentPage}
                                            />
                                        </div>
                                    </>
                                ):(
                                <p>No Data Available</p>
                                )
                        }
                    </div>
                </div>

            </div>
        </QueryClientProvider>
    )
}