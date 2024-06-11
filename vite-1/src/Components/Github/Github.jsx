import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"
import axios from 'axios'

 const Github = () => {
   const [data,setdata]= useState([])
  // const data = useLoaderData();
  const getAxios = async () => {
    const data = await axios.get("https://api.github.com/users/sneha-bhosale09",);
    console.log(data)
    setdata(data.data)
  }
  useEffect(()=>{
// fetch('https://api.github.com/users/sneha-bhosale09')
// .then(response=> response.json())
// .then(data=>{
//   console.log(data)
//   setdata(data)
// })
getAxios()
  },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="git pic" width={300} />
    </div>
  )
}

export default Github

// export const githubInfoLoader = async()=>{
//  const response = await fetch('https://api.github.com/users/sneha-bhosale09')
//  console.log(response)
// //  return response.json()
// }


