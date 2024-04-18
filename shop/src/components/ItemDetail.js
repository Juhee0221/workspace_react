import {useNavigate, useParams} from 'react-router-dom'
const ItemDetail = ({itemList}) => {
    const navgate = useNavigate()

    //url에서 넘어오는 데이터 받기
    const {id} = useParams();
    console.log(id);
    console.log(itemList)
    // for(const item of items){
    //     console.log(item)
    // }
    // const {id} = useParams();
    // console.log(id)
    // == 자료형은 비교를 안함. 10 == '10' !=
    // === 자료형까지 일치하면 true 10 === '10' !==

    let itemInfo;
    for(const item of itemList){
        if(item.id == id){
            itemInfo = item;
            break;
        }
        console.log(item)
    }

    // let i = itemList.fide(item => item.id === id);
    // 자료형확인하는 법 : typeof()
    return(
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                    <img width='100%' src={process.env.PUBLIC_URL + `/images/${itemInfo.imgName}`} />
                    <h4>{itemInfo.title}</h4>
                    <p>{itemInfo.content}</p>
                    <p>{itemInfo.price}</p>
                    <button className="btn btn-primary">주문하기</button>
                    <button className="btn btn-secondary" onClick={() =>{navgate('/')}}>상품목록페이지가기</button>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;