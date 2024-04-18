import { useState } from "react";

function Header({num1 , myName}){
    // 넘어오는 데이터를 바로 구조분해할당을 시켜 원하는 변수명으로 출력가능.

    // console.log(props)
    
    // 넘어오는 데이터를 구조분해할당으로 받아 출력 가능!
    // const {num1 , myName} = props;

    let [addr , setAddr] = useState('');

    return(
        <>
        {/* 최상위 태그는 딱 하나만! */}
        {/* <div>
            <h1>Header {props.num1} </h1>
        </div>

        <div>
            <h1>Header {props.myName} </h1>
        </div> */}

        <div>
            <h1>Header {num1} </h1>
        </div>

        <div>
            <h1>Header {myName} </h1>
            {/* jpx에는 무조건 닫는 태그가 있어야됨 */}
            <input type="text" name="addr" onChange={(e) => {
                // event가 어디에 달려있는것인가..?
                // e.target : onChange가 발생한 태그가 무엇인지 알려줌 
                // console.log(e.target.name);

                // 입력한 값을 가지고 간다.
                setAddr(e.target.value);
            }}/>
        </div>
        
        </>
    )
}

export default Header;