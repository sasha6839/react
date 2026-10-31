export default function FavoritesList({
    items,
    onRemove,
    hasFavorites,
    ariaLabel = 'Список обраного'
}){

    if(!items?.length){
        return(
            <p className="empty">
                {hasFavorites ? 'Змініть фільтри' : "Нічого не знайдено"}
            </p>
        )
    }

    return (
        <ul className="list" aria-label={ariaLabel}>
            {items.map((item)=>{
                <li 
                    key={`${item.type}-${item.id}`}
                    className="row"
                    style={{justifyContent: 'space-between'}}
                >
                    <div>
                        <span className="tag">{item.type}</span>
                        {item.label}
                    </div>
                    <button
                        type="button"
                        className="button remove"
                        onClick={()=> onRemove(item)}
                        title="Видалити"
                        aria-label={`Видалити ${item.label} з обраного`}
                    >
                        X
                    </button>
                </li>
            })}
        </ul>
    )

}