import { createContext } from "react";
// 1 Step
export const BioContext = createContext() // this variable will work as component

// 2 Step

export const BioProvider = ({ children }) => {
    const myName = "vipin"
    const myAge = "22"
    return <BioContext.Provider value={{myName, myAge}} >{children}</BioContext.Provider>
}