import style from './searchResults.module.css'

const searchResults = ({results}) => {
    return (
        <div className={style.resultsList}>
            {
                results.map(item => 
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            }
        </div>
    )
}

export default searchResults