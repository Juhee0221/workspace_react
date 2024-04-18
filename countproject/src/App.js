import logo from './logo.svg';
import './App.css';
import Inputs from './components/inputs';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import { useState } from 'react';

function App() {
  //spread(스프레드) 연산자
  let arr = [1,2,3];
  // ...arr => arr배열의 모든 요소를 낱개(하나씩)로 분리

  let arr1 = [];
  arr1.push(1); //[1]
  arr1.push(2); // [1,2]
  arr1.push(arr); // [1,2, [1,2,3]]
  //arr1에 arr의 3을 출력
  console.log(arr1[2][2])
  //...arr을 넣을 시 하나씩 들어감
  arr1.push(...arr); // [1,2 ,[1,2,3] ,1 ,2 ,3]

  let arr2 = [...arr, 5, 6]; // [1,2,3,5,6]

  let arr3 = [1,2,3];
  let arr4 = [1,2,3];
// arr3와 arr4는 같은 값을 가지고 있나요? => NO!!

  let arr5 = [1,2,3];
  let arr6 = [...arr5]; //[1,2,3]

  //car1.price => 2000 키 값은 중복이 안되기때문에 
  //중복이 된다면 마지막에 넣은 값으로 덮어씀
  let car1 = {
    'model' : '아반떼',
    'price' : 1000 ,
    'color' : 'white',
    'price' : 2000 
  };

  let car2 = {...car1};

  let [counter , setCounter] = useState(0);

  const changeCounter = (num) =>{
      setCounter(counter + num)
  }
  
  return (
    <div className="App">
        {/* <Inputs /> */}
        <Header />
        <Body counter={counter}/>
        <Footer changeCounter={changeCounter}/>
    </div>
  );
}

export default App;
