import { Route, Routes } from "react-router-dom"
import SignUpForm from "./components/signUp"
import LogIn from "./components/login"
import { ToastContainer } from "react-toastify";
import Home from "./components/home/home";



function App() {
 

  return (
   <div>
    <Routes>
    <Route path="/" element={<SignUpForm/>} />
    <Route path="/signup" element={<SignUpForm/>} />
    <Route path="/login" element={<LogIn/>} />
    <Route path="/home" element={<Home/>} />
    </Routes>
    <ToastContainer/>
   </div>
  )
}

export default App;
