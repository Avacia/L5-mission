/* ============================== Import Files ============================== */
/* ======================= Component ======================= */
import style from './pagination.module.css'


/* ================== Pagination Function ==================== */
export default function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage}) {

    /* ==================== Const Variable ===================== */
    let pages = [];

    /* ================ Page Calculator Function =============== */
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }


    return (
        <div>
            {
                pages.map((page, index) => {
                    return(
                        <button key={index} 
                                onClick={() => setCurrentPage(page)}
                                className={page == currentPage ? 'active' : ''}
                        >
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )
}
