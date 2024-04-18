const ItemPlus = ({pulsData}) =>{

    return(
        <div className="row">
            <div className="col">
                {pulsData.map((puls) => {
                    <div>
                        <div>{puls.id}</div>
                        <div>{puls.title}</div>
                        <div>{puls.content}</div>
                        <div>{puls.price}</div>
                    </div>
                }) }
            </div>
        </div>
    )
}

export default ItemPlus;