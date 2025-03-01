import { Route, Routes } from "react-router-dom"
import SignUpForm from "./components/signUp"



function App() {
 

  return (
   <div>
    <Routes>
    <Route path="/" element={<SignUpForm/>} />
    </Routes>
   </div>
  )
}

export default App
