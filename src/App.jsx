import { Route, Routes } from "react-router-dom"
import SignUpForm from "./components/signUp"
import LogIn from "./components/login"



function App() {
 

  return (
   <div>
    <Routes>
    <Route path="/" element={<SignUpForm/>} />
    <Route path="signup" element={<SignUpForm/>} />
    <Route path="login" element={<LogIn/>} />
    </Routes>
   </div>
  )
}

export default App
