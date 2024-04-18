import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// axios.get(url, [config]) : 서버에서 데이터를 받아올때 -> @GetMapping()
// axios.post(url , 데이터, [config]) : 서버에서 insert작업할때 -> @PostMapping()
// axios.put(url , 데이터, [config]) : 서버에서 update 작업할 때 -> @PutMapping()
// axios.delete(url , [config]) : 서버에서 delete 작업 할때 -> @DeleteMapping()
const Write = () =>{
  const navigate = useNavigate();

  const [title , setTitle] = useState('');
  const [writer , setWriter] = useState('');
  const [content , setContent] = useState('');

  const [isShow , setIsShow] = useState(false);

  const inputTitle = e => {
    setTitle(e.target.value);
  }

  const inputWriter = e => {
    setWriter(e.target.value);
  }

  const inputContent = e =>{
    setContent(e.target.value);
  }

  const inputs = {
    title : '',
    writer : '' ,
    content : ''
  }
  
  const [boardInfo , setBoardInfo] = useState(inputs)

  return(
    <>
      <div className="row mt-3">
        <form>
        <div className="col text-center">
          <table className="table">
            <tbody>
            <tr>
              <td>제목 :</td>
              <td><input type="text" onChange={e => {
                setBoardInfo({...boardInfo , title : e.target.value })
              }}></input></td>
            </tr>
            <tr>
              <td>작성자 :</td>
              <td><input type="text" onChange={e => {
                setBoardInfo({...boardInfo , writer : e.target.value })
              }}></input></td>
            </tr>
            <tr>
              <td>내용 :</td>
              <td><textarea cols={20} rows={10} type="text" onChange={e => {
                setBoardInfo({...boardInfo , content : e.target.value })
                }}></textarea></td>
            </tr>
            </tbody>
          </table>
        </div>

        <button className="btn btn-primary" type="button" value={"글등록"} onClick={(e) => {
          axios.post("/insertBoard" , boardInfo)
          .then(reponse => {
            alert("글 등록 완료")
            navigate('/list')
          })
          .catch(error => {
            console.log(error)
          })
        }}>글등록</button>

        {
          isShow ? 
          <div>
            <div>제목 : {boardInfo.title}</div>
            <div>작성자 : {boardInfo.writer}</div>
            <div>내용 : {boardInfo.content}</div>
          </div> : 
          null
        }
        
        </form>
      </div>
    </>
    
  );
}

export default Write;