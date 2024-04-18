function Body(props){
    const num1 = 10; 
    const num2 = 20; 

    const person = {
        'name' : 'hong',
        'age' : 20
    }
    console.log(props)
    return(
        <>
            <div>body</div>
            <div>{num1} / {num2} / {num1 + num2}</div>
            <div>{person.name} / {person['age']}</div>
            <div>{props.stuInfo.stuName} / {props.stuInfo.age}</div>
        </>
        

    )
} 

export default Body;