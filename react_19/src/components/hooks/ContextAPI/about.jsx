import { useContext } from "react"
import { BioContext } from "."

export const About = () => {
    const {myName, myAge} = useContext(BioContext)
    return (
        <h1>Hello Context Api About. My Name is {myName}. I am {myAge} yer old About</h1>
    )
}