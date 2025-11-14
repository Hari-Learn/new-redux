import Testing from "./comp/Testing"
import ForwardRefEx from "./comp/UseRefEx"
import UseRefEx from "./comp/UseRefEx"
import NewComp from "./newComp"
import {Route,Routes} from 'react-router-dom'
import Home from "./pages/home"
import About from "./pages/About"

function App() {
  

  return (
    <>
      
      <h1>React Router Sample</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>


      </Routes>


{/*       
      <NewComp></NewComp>
      <Testing></Testing>
      <UseRefEx></UseRefEx>
      <ForwardRefEx></ForwardRefEx> */}
    </>
  )
}

export default App
