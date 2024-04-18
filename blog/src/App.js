import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function test(){
    
}

function App() {
  //let title ='첫번째 글';

  let arr = [1,2];
  let num1 = arr[0];
  
  //데이터가 차례대로 들어감
  let [a, b] = [1, 2];

  // a => 1
  console.log(a);
  
  //state 변수
  //useState : return 값 배열

  let [title, setTitle] = useState(['리액트 학습', '울산 맛집', '겨울 코트 추천']);

  //setLikeCnt를 사용해야 likeCnt 값이 변경됨
  //매개변수로 전달되는 값이 setLikeCnt 값을 변경

  let [likeCnt , setLikeCnt] = useState([0,0,0]);

  let [isShow, setIsShow] = useState(false);
  
  // input 태그에 입력한 값을 저장하고 있는 state 변수 
  let [newTitle , setNewtitle] = useState('')

  return (
    <div className="App">
        <div className='black-nav'>
          <h4>블로그</h4>
        </div>

        <button type='button' onClick={()=>{
          //[...변수명] : 데이터를 그대로 복사하겠다. 
          let title2 = [...title];

          title2[0] = '남자 옷 추천';

          setTitle(title2)
        }}>글 변경</button>
     

        {/* 영역을 나눈 후 채워 넣기 */}
        {/* map에는 다시 한번 리턴이 가능 */}

        {
          title.map((e, i) => {
            return(
              <List key={i} title={title} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt} setIsShow={setIsShow} setTitle={setTitle}/>
            );
          })
        
        }

        <div>
              {/* e : event 줄임말.  */}
            <input type='text' onChange={(e) => {
              // input 태그에 입력한 값을 출력
              // 이벤트가 발생한 태그 
              setNewtitle(e.target.value)
            }}/>
            <input type='button' value={'저장'} 

              onClick={(e)=> {
                //복사
                let copyTitle = [...titel];
                //삽입
                copyTitle.push(newTitle);
                // unshift : 배열 가장 앞에 데이터 삽입
                // ex ) copyTitle.unshift();
                setTitle(copyTitle);
              }}/>
        </div>
        {
          isShow ? <Detail/> : ''
        }
    </div>
  );
}

//블로그 글 하나하나를 표현하는 컴포넌트
function List(props){
  return(
    <div className='list'>
          <h4> 
            <span onClick={() => {
                  props.setIsShow(true)
                  }}>
                      {props.title[props.idx]}
            </span>

              {/* <span onClick={() => {
              let copyLikeCnt = [...props.likeCnt];
              copyLikeCnt[props.idx]++;

              props.setLikeCnt(copyLikeCnt);
              
            }}>👍</span> 
                  {props.likeCnt[props.idx]}  */}
          </h4>
          <p>2월 19일 작성</p>
          <button type='button' onClick={(e) => {
            let copyTitle = [...props.title];
            
            //splice : 삭제
            copyTitle.splice(props.idx, 1);

            props.setTitle(copyTitle)
          }}>
            삭제</button>
        </div>
  );
}

//상세 정보를 표현하는 컴포넌트
function Detail(){
  return(
    <div className='detail'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
