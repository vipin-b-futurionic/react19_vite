import './App.css'
import { BioProvider } from './components/hooks/ContextAPI'
import { Home } from './components/hooks/ContextAPI/home'
import { About } from './components/hooks/ContextAPI/about'
import { DarkLight, ThemeProvider } from './components/hooks/ContextAPI/DarkLight'
import { ReducerComp } from './components/hooks/UseReducer'



const  App = () => {
  return (
    <>
      <ReducerComp />
    </>
  )

}

export default App
