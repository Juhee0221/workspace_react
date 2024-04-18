
import {useNavigate } from 'react-router-dom'

const Item = ({item}) => {
    const navigate = useNavigate();
    return(
        
        <div className='col-4 item-div' style={{marginTop:'30px'}} onClick={() => navigate(`/detail/${item.id}`)}>
            <img width='100%' src={process.env.PUBLIC_URL + `/images/${item.imgName}`} />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
        </div>
    )
    

}

export default Item;