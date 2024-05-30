import style from './headSection.module.css'

export default function headSection(){
    return(
        <div className={style.heading}>

            <div className={style.topic}>
                <h1>Lorem ipsum dolor sit amet</h1>
            </div>

            <div className={style.searchBar}>
                <p>Search Bar</p>
            </div>
            
        </div>
    )
}