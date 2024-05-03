import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarInsert = () =>{

  const navigate = useNavigate();
  
  const salsInfo = {
    buyetr : '' ,
    color : 'black',
    tel : '' ,
    carNum : 0
  }
  const [salesList , setSalseList] = useState(salsInfo)
  const salsInfoSet = (e) =>{
    setSalseList({...salesList, [e.target.name] : e.target.value})
  }

  useEffect(() =>{
    axios.get("/carInsert")
    .then(reponse =>{
      console.log(reponse.data)
      setCarList(reponse.data)
      setSalseList({...salesList, carNum : reponse.data[0].carNum})
    })
    .catch(error =>{
      console.log(error)
    })
    },[])
  const [carList , setCarList] = useState([])
  
  return(
    <>
      <div>판매정보등록</div>

      <div>
        <span>구매자명 :</span>
        <input type="text" name="buyetr" onChange={salsInfoSet}></input>
      </div>

      <div>
        <span>색상 :</span>
        <select name="color" onChange={salsInfoSet}>
          <option value='balck'>Black</option>
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
        </select>
        <span>모델 :</span>
        <select name="carNum">
          {
            carList.map((car, index) =>{
              return(
                <option value={car.carNum} key={index}>{car.modelName}</option>
              )
            })
          }
        </select>
      </div>

      <div>
        <span>연락처 :</span>
        <input type="text" name="tel" onChange={salsInfoSet}></input>
      </div>
      
      <div>
        <button type="button" onClick={() => {
          axios.post('/salesInsert' ,salesList)
          .then(reponse =>{
            navigate("/carSalInfo")
          })
          .catch(error =>{
            console.log(error)
          })
        }}>등록</button>
      </div>
    </>
  )
}

export default CarInsert;