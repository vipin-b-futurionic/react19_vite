import { useEffect, useState } from "react"

export const ReactUseEffect = () =>{
    const[date, setDate] = useState(0)

    useEffect(() => {
        setInterval(() => {
            const updateDate =new Date() 
            setDate(updateDate.toLocaleTimeString()) 
        },1000 )
         
    }, [] )

    return(
        <div>
            <h1>Date: {date}</h1>
        </div>
    )
}