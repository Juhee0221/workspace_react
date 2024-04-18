import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

// input 컴포넌트


const Inputs = () =>{

    let [member, setMember] = useState({
                                        'name' : '' 
                                        ,'myDate' : ''
                                        ,'car' : ''
                                        ,'content' : ''
                                    });
    const changeMemberInfo = (e) => {
        setMember({
            // e.target.name => 키가 됨
            ...member,  [e.target.name] : e.target.value
        })
    }
    // 이렇게 적어도 이름의 값이 바뀌지않는다
    // why? 안의 내용이 바뀌어도 member 자체의 주소값이
    // 바뀌지 않았기 때문에.
    // member.name = 'java';
    // setMember(member);

    return(
        <div>
            <div>input 컴포넌트</div>

            <div>
                {/* <input type="text" name="name" onChange={(e) => {
                    // const copy = member;
                    // member.name = 'hong'
                    // alert(copy.name) // hong
                    // alert(member.name)  //hong
                    
                    // spread 연산자
                    // 원래있던 객체의 값을 똑같이 복사
                    const copyMember = {...member};
                    copyMember.name = e.target.value;
                    // member 값을 copyMember 값으로 변경해주면
                    // setMember가 바뀌었다고 인식.
                    setMember(copyMember);

                    setMember({
                        ...member, 
                        'name' : e.target.value
                    })


                }}/> */}
                <input type="text" name="name" onChange={changeMemberInfo}/>
            </div>

            <div>    
                {/* <input type="date"  onChange={(e) => {
                    setMember({
                        ...member , 'myDate': e.target.value
                    })
                }}/> */}
                <input type="date" name="myDate" onChange={changeMemberInfo}/>
            </div>
            <div>    
                <select>
                    <option>아반떼</option>
                    <option>K3</option>
                    <option>모닝</option>
                </select>
            </div>
            <div>
                <textarea cols={30} rows={5}>

                </textarea>
            </div>
            <div>
                <button type="button">입력 내용 확인</button>
            </div>

            <div className="result-div">
                <div>이름 : {member.name}</div>
                <div>날짜 : {member['myDate']}</div>
                <div>셀렉트: {member.car}</div>
                <div>내용 : {member['content']}</div>
            </div>
        </div>
    );
}



export default Inputs;