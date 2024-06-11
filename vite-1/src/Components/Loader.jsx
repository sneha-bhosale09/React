export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/sneha-bhosale09')
  console.log(response)
 //  return response.json()
 }