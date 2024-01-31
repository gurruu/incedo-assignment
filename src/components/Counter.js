import {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    const clickHandler=()=>{
        setCount(count+1);
    }
    return (
        <>
        <p>Current Value is {count}.</p>
        <button onClick={clickHandler}>Increase by 1.</button>
        </>
    )
}
export default Counter