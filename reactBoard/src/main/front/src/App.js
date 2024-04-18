
import { Link } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import BoardList from './pages/BoardList';
import axios from 'axios';
import { useState } from 'react';
import Write from './pages/Write';
import Exam from './pages/Exam';
import Detail from './pages/Detail';
/////////////////////////////////////////////////////

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/list' element={<BoardList />} />
          {/* 위의 경로 빼고 나머지 */}
          <Route path='/write' element={<Write />} />
          <Route path='/exam' element={<Exam/>} />
          <Route path='/detail/:boardNum' element={<Detail />}></Route>
          <Route path='*' element={<div>없는 페이지 입니다.</div>}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
