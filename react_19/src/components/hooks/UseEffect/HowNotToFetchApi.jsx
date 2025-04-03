import { useEffect, useState } from "react"

export const HowNotToFetchApi = () =>{
    const[apiData, setApiData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) =>{
            setApiData(data)
        } )
        .catch((error) => console.log(error))
    }, [])




    return (
        <div>
            <ul>data:
                {
                    apiData.map((currData) => {
                        return <li key = {currData.id}> {currData.title}</li>
                    })
                }
            </ul>
        </div>
    )

}