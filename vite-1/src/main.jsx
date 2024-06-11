import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './Components/Home/Home.jsx'
import App from './App'
import './index.css'
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import LAyout from './LAyout.jsx'
// import About from './Components/About/About.jsx'
// import Contact from './Components/Contact/Contact.jsx'


//second method to do routing

// const router = createBrowserRouter([
//   {path:'/',
//     element: <LAyout/>,
//     children:[
//       {path:"",
//         element:<Home/>
//       },
//       {path:"about",
//         element:<About/>
//       },
//       {path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


//third method to do routing

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<LAyout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>

//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    {/* <RouterProvider router ={router}/> */}
    <App/>
  </React.StrictMode>,
 )
