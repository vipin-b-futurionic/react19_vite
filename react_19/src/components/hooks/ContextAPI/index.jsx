import { createContext } from "react";
// 1 Step
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext() // this variable will work as component

// 2 Step

export const BioProvider = ({ children }) => {
    const myName = "vipin"
    const myAge = "22"
    return <BioContext.Provider value={{myName, myAge}} >{children}</BioContext.Provider>
}