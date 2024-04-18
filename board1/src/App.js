import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const board_list = [
    {
      'boardNo' : 1,
      'title' : '1번 글',
      'content' : '1번 글 내용',
      'writer' : '김자바',
      'regDate' : '2024-02-01'
    },
    {
      'boardNo' : 2,
      'title' : '2번 글',
      'content' : '2번 글 내용',
      'writer' : '홍길동',
      'regDate' : '2024-02-02'
    },
    {
      'boardNo' : 3,
      'title' : '3번 글',
      'content' : '3번 글 내용',
      'writer' : '이자바',
      'regDate' : '2024-02-07'
    },
    {
      'boardNo' : 4,
      'title' : '4번 글',
      'content' : '4번 글 내용',
      'writer' : '김자비',
      'regDate' : '2024-02-07'
    },
    {
      'boardNo' : 5,
      'title' : '5번 글',
      'content' : '5번 글 내용',
      'writer' : '유자바',
      'regDate' : '2024-02-08'
    }
  ];

  let [isShow, setIsShow] = useState(false);
  let [idx , setIdx] = useState(0);

  return (
    <div className="App">
        <div className='board-header'>
            <h3>게시글</h3>
        </div>
        
        <div className='board-table'>
          <table>
            <thead>
              <tr>
                <td>글번호</td>
                <td>제 목</td>
                <td>작성자</td>
                <td>작성일</td>
              </tr>
            </thead>
            <tbody>
              {
                board_list.map((e , i)=>{
                  
                  
                  return(
                    
                    <Content key={i} borad={e} setIsShow={setIsShow} i={i} setIdx={setIdx}/>
                  )
                })
              }
            </tbody>
          </table>
        </div>

              
          {
            isShow ? <Foofer board_list={board_list} idx ={idx} setIsShow={setIsShow}/> : ''
          }      
        
        
    </div>
  );
}

function Content(props){
  
  return(
    <tr>
      <td>{props.borad.boardNo}</td>
      <td onClick={()=>{
        props.setIsShow(true)
        props.setIdx(props.i)
      }}>{props.borad.title}</td>
      <td>{props.borad.writer}</td>
      <td>{props.borad.regDate}</td>
    </tr>
  );
}
function Foofer(props){
  console.log(props);
  return(

    <div className='board-footer'>
      <div>
          글번호 : {props.board_list[props.idx].boardNo}
      </div>
      <div>
          제목 :   {props.board_list[props.idx].title}   
      </div>
      <div>
          내용 :   {props.board_list[props.idx].content} 
      </div>
      <div>
          작성자 : {props.board_list[props.idx].writer} 
      </div>
      <div>
          작성일 : {props.board_list[props.idx].regDate}
      </div>

      <button type='button' onClick={()=>{
        props.setIsShow(false)
      }}>닫기</button>
    </div>
  )
}

export default App;
