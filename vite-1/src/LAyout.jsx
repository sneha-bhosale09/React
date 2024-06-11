import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const LAyout = () => {
  return (
    <>
     <Header/> 
     <Outlet/>
     <Footer/>
    </>
  )
}

export default LAyout
