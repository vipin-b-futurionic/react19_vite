import { useContext } from "react"
import { BioContext } from "."

export const Home = () => {
    const {myName, myAge} = useContext(BioContext)
    return (
        <h1>Hello Context Api. My Name is {myName}. I am {myAge} yer old </h1>
    )
}