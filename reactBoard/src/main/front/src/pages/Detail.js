import axios from "axios";
import { useState } from "react";
import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const {boardNum} = useParams();
  console.log(boardNum)

  const [boardDetail , setBoardDetail] = useState({})
  const navigate = useNavigate();

  useEffect( () =>{
    axios.get(`/detailSelect/${boardNum}`)
    .then(responce => {
      setBoardDetail(responce.data)
        
        console.log(responce.data)
    })
    .catch(error => {
        console.log(error)
    })
}, []);

  return(
    <>
    <div><span>번호 :</span>{boardDetail.boardNum}</div>
    <div><span>제목 :</span>{boardDetail.title}</div>
    <div><span>작성자 :</span>{boardDetail.writer}</div>
    <div><span>내용 :</span>{boardDetail.content}</div>
    <div><span>작성일 :</span>{boardDetail.createDate}</div>

    <button type="button" onClick={() => {
      axios.delete(`/delete/${boardDetail.boardNum}`)
      .then(navigate("/list"))
    }}>삭제</button>

    <button type="button" onClick={() => {navigate('/list')}}>목록가기</button>
    <button type="button">수정하기</button>
    </>
  );
}

export default Detail;