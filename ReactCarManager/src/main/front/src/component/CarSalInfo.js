import axios from "axios";
import { useEffect, useState } from "react";

const CarSalInfo = () =>{

  useEffect(()=>{
    axios.get("/carSalInfo")
    .then(reponse => {
      console.log(reponse.data)
      setSalInfo(reponse.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  const [salInfo , setSalInfo] = useState([])
  return(
    <>
     <div>판매목록</div>

     <div>
      <table className="table table-striped">
      <thead>
          <tr>
            <td>NO</td>
            <td>구매자명</td>
            <td>연락처</td>
            <td>구매일</td>
            <td>색상</td>
            <td>모델명</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
        {
          salInfo.map((sal, idx) =>{
            return(
             
                  <tr key={idx}>
                    <td></td>
                    <td>{sal.buyetr}</td>
                    <td>{sal.tel}</td>
                    <td>{sal.salesDate}</td>
                    <td>{sal.color}</td>
                    <td>{sal.carVO.modelName}</td>     
                    <td>{sal.carVO.price}</td>
                  </tr>
              
              
            )
          })
        }
        </tbody>
      </table>
     </div>
    </>
  )
}
export default CarSalInfo;