import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react"

//./../ 상위 프로젝트
const Carset = () =>{
  
  const carData = {
      modelName : '' ,
      price : '',
      madeBy : '현대'
  }

  useEffect(()=>{
    axios.get(`/selectCar`)
    .then(response =>{
      setCarList(response.data)
      // console.log(response.data)
    })  
    .catch(error => {
      console.log(error)
    })
  },[])

  const [carInsert , setCarInsert] = useState(carData) 
  const [carList ,  setCarList] = useState([])
  const navigator = useNavigate();


  const insertData = (e) =>{
    setCarInsert({...carInsert , [e.target.name] : e.target.value})
  }

  const [cnt, setCnt] = useState(0);
  useEffect(() =>{
    console.log(cnt);
  }, [carInsert]);

  // useRef : input태그를 지칭할수 있도록 함 
  const modelNameRef = useRef();
  const priceRef = useRef();
  //등록 버튼 클릭시 실행 
  const insertCar = (e) =>{
    
    if(carInsert.modelName === ''){
      alert("모델명을 입력해주세요.")
      modelNameRef.current.focus();
      return;
    }
    
    if(carInsert.price === 0 || carInsert.price === ''){
      alert("가격을 입력해주세요")
      priceRef.current.focus();
      return;
    }

    axios.post(`/insertCar`, carInsert)
    .then(response =>{
      setCarList(response.data)
      modelNameRef.current.value = '';
      priceRef.current.value = '';
      setCarInsert({
        modelName : '' ,
        price : '',
        madeBy : '현대'
      })
      alert("등록완료")
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return(
    <>
      <div className="row">
        <div className="col">
          <button type="button" onClick={() => {
            setCnt(cnt + 1);
          }}>cnt 증가</button>
          <div className="Carset-header">
            <h5>차량등록</h5>
          </div>
          
          <div className="Carset-content">
            <span>제조사 :</span>
            <select name='madeBy' onChange={insertData}>
              <option>HYENDAI</option>
              <option>KIA</option>
              <option>BMW</option>
            </select>

            <span>모델명 :</span>
            <input type="text" name='modelName' ref={modelNameRef} onChange={insertData}/>

            <span>차량가격 :</span>
            <input type="text" name='price'ref={priceRef} onChange={insertData}
                    onKeyDown={(e) => {
                      if(e.key == 'Enter'){
                        insertCar()
                      }
                    }}/>
          </div>

          <div>
            <button className="btn btn-primary" onClick={insertCar}>등록</button>
          </div>
        </div>
      </div>

      <div className="row mt-3 text-center">
        <div className="col-10 ">
          {

            <div>
              <table className="table">
                <thead>
                  <tr>
                    <td>번호</td>
                    <td>모델명</td>
                    <td>제조사</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    carList.length == 0 ? 
                    <tr>
                      <td colSpan={3}>조회된 데이터 X</td>
                    </tr>
                    :
                    carList.map((car, index) =>{
                      return(
                        <tr key={car.carNum}>
                          <td>{car.carNum}</td>
                          <td>{car.modelName}</td>
                          <td>{car.madeBy}</td>
                        </tr>
                      )
                      
                    })
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </>
  )
}
export default Carset;