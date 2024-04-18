import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardList = () =>{
    const [boardList , setBoradList] = useState([]);

    //컴포넌트가 렌더링 된 후에 실행
    useEffect( () =>{
        axios.get("/list")
        .then(responce => {
            setBoradList(responce.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);
    
    const navigate = useNavigate();
    
    return(
        <div className="boardList">
            
            <table className="table mt-5">
                <tr>
                    <td>NO</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일</td>
                    <td>조회수</td>
                </tr>
                
                {
                    boardList.map((board , index) =>{
                        return(
                            <tr key={index} onClick={() => navigate(`/detail/${board.boardNum}`)}>
                                <td>{boardList.length - index}</td>
                                <td>{board.title}</td>
                                <td>{board.writer}</td>
                                <td>{board.createDate}</td>
                                <td>{board.readCnt}</td>
                            </tr>
                        );
                    })
                }
               
            </table>

            <div className="row mt-3">
                <div className="col text-center">
                    <button className="btn btn-primary" onClick={() => {navigate("/write")}}>글쓰기</button>
                </div>
            </div>
            
        </div>
    );
    
}

export default BoardList;