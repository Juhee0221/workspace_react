// axios를 이용하여 Controller를 데이터로 넘기기

import axios from "axios";

// axios.get(url, [config]) : 서버에서 데이터를 받아올때 -> @GetMapping()
// axios.post(url , 데이터, [config]) : 서버에서 insert작업할때 -> @PostMapping()
// axios.put(url , 데이터, [config]) : 서버에서 update 작업할 때 -> @PutMapping()
// axios.delete(url , [config]) : 서버에서 delete 작업 할때 -> @DeleteMapping()
function Exam(){
  
  //post방식으로 데이터 넘기기 
  const post_1 = () => {
    axios.post('/exam/post1' , {
      title : 'java',
      content : '내용'
    })
  }
  const data1 = {
    title : 'java',
    content : '내용'
  }

  const post_2 = () => {
    axios.post('/exam/post2' , data1)
  }

  //get으로 데이터 보내기
  
  const get_1 = () => {
    axios.get('/exam/get1?name=java&age=20')
  }

  const get_2 = () => {
    axios.get('/exam/get2',{
      params : {
        name : 'java', 
        age : 20 
      }
    })
  }

  const get_3 = () => {
    axios.get('/exam/get3/1',{
      params : {
        name : 'java', 
        age : 20 
      }
    })
  }
  return(
    <>
      <div>
        <button type="button" onClick={post_1}>post 방식으로 데이터 보내기1</button>
      </div>
      <div>
        <button type="button" onClick={post_2}>post 방식으로 데이터 보내기2</button>
      </div>
      <div>
        <button type="button" onClick={get_1}>get 방식으로 데이터 보내기1</button>
      </div>
      <div>
        <button type="button" onClick={get_2}>get 방식으로 데이터 보내기2</button>
      </div>
      <div>
        <button type="button" onClick={get_3}>get 방식으로 데이터 보내기3</button>
      </div>
    </>
  );
}
export default Exam;