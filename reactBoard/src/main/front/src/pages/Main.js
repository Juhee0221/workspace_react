import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
//게시판 프로젝트 시작 시 처음 보여주는 메인 화면 컴포넌트

const Main = () =>{

    const navigate = useNavigate();

    return(
      <>
        <div className='row mt-3 mb-5'>
          <div className='col text-center'>
              <h1>게시판 프로젝트</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col text-center'>
            <span className="link-span" onClick={() => navigate('/list')}><h4>게시판 프로젝트 시작</h4></span>
          </div>
        </div>
      </>
    );
}

export default Main;