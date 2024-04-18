import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';

// Componet 컴포넌트 : 리액트로 만들어진 앱을 이루는 최소한의 단위
// 항상 대문자로 시작함 , 태그를 열자 말자 닫기 가능.
// 파일 하나 당 하나의 컴포넌트를 생성하는것이 좋다.
function App() {
  const num1 = 10; 
  const myName = 'hong';
  const student ={
    'stuName' : '자바',
    'age' : 30 ,
    'score' : 80
  }

  // 구조분해할당
  const arr = [1,2,3];

  // 기본방식
  const arr_0 = arr[0];
  const arr_1 = arr[1];
  const arr_2 = arr[2];

  // 배열의 구조분해할당
  const [a, b, c] = arr;
  console.log(`a = ${a}`);
  // 배열의 값이 차례대로 들어감 
  const [a1, b1] = arr; // a1= a, b1=2
  const [a2, b2, c2, d2] = arr; //d2 = undifined, 지정된 배열의 값이 초과된 값은 undifined가 됨 
  
  // 객체의 구조분해할당
  // 객체는 키 값으로 가져감
  const {stuName , age , score} = student;
  console.log(stuName)

  // student 속 age의 키 값을빼 abc라는 변수에 담겠다라는 뜻
  const {age:abc} = student;
  console.log(`111 + ${abc}`)

  let test_num = 10;
  
  function changeNum(){
    test_num = 20;
    console.log(test_num)
  }
  
  //useState 사용 
  // useState로 만든 변수의 값이 바뀌면 재렌더링 함. (그림을 다시 그림)
  // 데이터의 변화가 생기면 useSteate가 선언된 컴포넌트를 다시 실행
  // 하위 컴포넌트도 다시 실행.
  // 값이 변경할것을 감지
  // useState 배열로 바꾸어 전달하는데 2개의 길이를 가진 배열을 전달.
  let [test_num2] = useState(10);
  // useState 를 사용할때는 매개변수를 구조분해할당을 사용하여 넘김
  // 첫번째 데이터 : useState의 소괄호 안의 데이터가 저장되는 변수
  // 두번째 공간 : 첫번째 데이터의 값을 변화시킬 함수
  let [testNum , setTestNum] = useState(10);
  
  function changeTestNum(){
    // 값을 변화시킬 함수를 호출하여 매개변수로 변화시키고 싶은 값을 저장.
    // 그러면 testNum의 값이 매개변수로 넣은 값으로 변환된다.
    setTestNum(20);
  }

  return (
    <div className="App">
      <div>{test_num} / {testNum}</div>
      <div>
        <button type='button' onClick={changeNum}>클릭!</button>
        <button type='button' onClick={changeTestNum}>리엑트 클릭!</button>
      </div>
      <Header num1={num1} myName={myName}/>
      <Body stuInfo={student}/>
      <Footer/>
    </div>

  );
}

//연습용 컴포넌트
function TestComponent(){
  return(
    <div>연습용 컴포넌트</div>
  );
}
export default App;
