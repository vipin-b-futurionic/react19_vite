import './App.css'
import { BioProvider } from './components/hooks/ContextAPI'
import { Home } from './components/hooks/ContextAPI/home'
import { About } from './components/hooks/ContextAPI/about'



const  App = () => {
  return (
    <BioProvider>
      <Home />
      <About />
    </BioProvider>
  )
}

export default App
