import { Route,BrowserRouter, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import User from "./Components/User/User"
import { githubInfoLoader } from "./Components/Loader"
import Github from "./Components/Github/Github"

const App = () => {
  return (
    <>

      <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="about" element={<About/>}  />
        <Route path="contact" element={<Contact/>}  />
        <Route path="user/:userid" element={<User/>}  />
        <Route loader={githubInfoLoader} path="github" element={<Github/>}  /> 
        
      </Routes>
      <Footer/>
      
      </BrowserRouter>



    </>
   
  )
}

export default App

