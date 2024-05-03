import logo from './logo.svg';
import './App.css';
import {Navbar , Nav , Container} from 'react-bootstrap';
import Home from './component/Home';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Carset from './component/Carset';
import CarSalInfo from './component/CarSalInfo';
import CarInsert from './component/CarInsert';


function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=> navigate('/')}>홈</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/carSet')}>차량관리</Nav.Link>
            <Nav.Link onClick={()=> navigate('/carInsert')}>판매정보등록</Nav.Link>
            <Nav.Link onClick={()=> navigate('/carSalInfo')}>판매목록</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='row mt-5'>
        <div className='col text-center'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/carSet' element={<Carset />}/>
            <Route path='/carInsert' element={<CarInsert />}/>
            <Route path='/carSalInfo' element={<CarSalInfo />}/>
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;
