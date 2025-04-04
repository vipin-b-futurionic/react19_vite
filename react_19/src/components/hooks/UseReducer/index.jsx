import { useReducer, } from "react"

export const ReducerComp = () => {


    const reducer = (state, action) => {
        console.log(state, action)
        if(action.type === "INCREMNT"){ return state+1}
        if(action.type === "DECREMNT") {return state-1}
    }

    //const [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, 0)
    //console.log(useReducer(reducer, 0));
    

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => dispatch({type:"INCREMENT"})} >Increment</button><br /><br />
                <button onClick={() => dispatch({type:"DECREMENT"})} >Decrement</button>
            </div>
        </>
    )
}