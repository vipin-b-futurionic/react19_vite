import { useState } from "react"
export const State = () => {

//Normal variable change does not show on the renderring
// but value chage in DOM in console to avoid that we use the useState'
//     let value = 0;     
    // const handleButtonClick = () =>{
//         value++;
//         console.log(value);

//     }
    const [count, setCount] = useState(0)
    const handleButtonClick = () =>{
        setCount(() => count+1)
    }
    //console.log(count)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
        </>
    )
}