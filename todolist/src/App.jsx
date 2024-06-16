import { useEffect, useState } from "react"
import { ToDoProvider } from "./Contexts/ToDoContext"
import ToDoForm from "./componets/ToDoForm"
import ToDoItem from "./componets/ToDoItem"

const App = () => {
  const [todos, settodo] = useState([])
  const addTodo =(todo)=>{
    settodo((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=>{

    settodo((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? todo: prevtodo)))
  }

  const deleteTodo =(id)=>{
    settodo((prev)=> prev.filter((todo)=> todo.id !== id))

  }

  const toggleComplete =(id)=>{
    settodo((prev)=> prev.map((prevtodo)=> prevtodo.id===id? {...prevtodo, completed: !prevtodo.completed }:prevtodo))

  }


  useEffect(()=>{
  const todos =  JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length>0){
    settodo(todos)
  }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])
  return (

    <ToDoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>

    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <ToDoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key ={todo.id} className="w-full">
                <ToDoItem todo={todo} />

              </div>
            ))}
        </div>
    </div>
</div>
    </ToDoProvider>
  )
}

export default App
