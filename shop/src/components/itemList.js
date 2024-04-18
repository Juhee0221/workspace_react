
import { useState } from "react";
import Item from "./item";
import axios from "axios";

const ItemList = ({itemList, moreData}) =>{

    const [isShow , setIsShow] = useState(true);

    return(
        <div className='container item-list-div'>
            <div className='row'>

            {itemList.map((item , i) => {
                return(
                    // react는 고유한 key값으로 구분을 시켜줘야됨.
                    <Item item={item} key={i}/>
                );
            })
            }

            </div>

            {
                isShow ? 
                <div className="row mt-3">
                    <div className="col text-center">
                        <button className="btn btn-primary" onClick={() => {
                            moreData();
                            setIsShow(false);
                            // this.remove();
                        }}>더보기</button>
                    </div>
                </div> :
                null
            }
            
        </div>
    )
}

export default ItemList;