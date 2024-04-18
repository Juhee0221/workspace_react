import { useEffect, useState } from 'react';
import './App.css';
import {Button, Navbar, Container , Nav} from 'react-bootstrap';
import mockData from './mockData';
import ItemList from './components/itemList';
import ItemPlus from './components/ItemPlus';



// router를 쓰기 위한 import
import {Routes , Route , Link , useNavigate } from 'react-router-dom'
import ItemDetail from './components/ItemDetail';
import axios  from 'axios';

//페이지 이동과 같은 기능을 : Router를 설치
//npm install react-router-dom@6
//설치 후 index.js 세팅

//react에서 비동기 통신을 위한 라이브러리 설치
//npm install axios 
function App() {
  // 상품하나하나는 객체로 표현
  const [itemList, setItemList] = useState(mockData);

  //useNavigate 선언
  const navigate = useNavigate();
  const [pulsData, setPlusData] = useState([]);

  function moreData(){
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((reponse) => {
      setItemList([...itemList, ...reponse.data])
    })
    .catch(error => console.log(error))
  }
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //         .then((response) => {setData(response.data)});
  // }, [])

  // console.log(`받아온 데이터 수 : ${data.length}`)
  // map은 리턴을 할 수 있다.
  // react에서 반복을 사용할때 map을 사용하는것을 권장 .

let str = '';
    

  return (
    <div className="App">
      {/* <ul>
      {
        data.map((element , idx) => {
          return(
            <li key={idx}>{element.title}</li>
          );
        })
      }
      </ul> */}
     
      {/* {
        itemList.map((element , idx) => {
          return (
            <div>안녕</div>
          );
        })
      } */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 배너 */}
      <div className='main-bg' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/main_bg.jpg)`}}></div>

      {/* 라우터 연습 */}
      <Routes>
        <Route path='/' element={<ItemList itemList={itemList} moreData={moreData}/>}/>
        <Route path='/detail/:id' element={<ItemDetail itemList={itemList}/>}/>
      </Routes>

      {/* Link */}
      {/* a 태그와 같은 기능 */}
      <Link to='/detail'>상세페이지</Link>
      {/* useNavigate */}
      {/* navigate(1) : 앞으로 이동 */}
      {/* navigate(1) : 뒤로 이동 */}
      <button className='btn btn-success' onClick={() => navigate('/detail')}>상세페이지로 이동</button>
      <button className='btn btn-success' onClick={() => {
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((reponse) => {setPlusData(reponse.data)})
          console.log(pulsData)
          // this.remove();

          str += `<ItemPlus pulsData = {pulsData}/>`
      }}>더보기</button>
      {/* 상품목록 */}
      {/* <ItemList itemList={itemList}/> */}
    </div>
  );
}

export default App;
