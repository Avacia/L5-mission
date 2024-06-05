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
        <div className={style.pagination}>
            {
                pages.map((page, index) => {
                    return(
                        <button key={index} 
                                onClick={() => setCurrentPage(page)}
                                className={page == currentPage ? `${style.active}` : `${style.inactive}` }
                        >
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )
}
