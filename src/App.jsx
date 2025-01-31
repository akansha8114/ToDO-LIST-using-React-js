import './App.css'
import { useState } from 'react'
import Todoinput from './Todoinput'
import TodoList from './TodoList'

function App() {
  const [todos, settodos] = useState([])

  function onTodoformSubmit(value) { 
    if(value){
      settodos([...todos, {id: todos.length + 1, value}]);
    }
    
  }

  return (
    <>
      <Todoinput onSubmit={onTodoformSubmit}/>
      <TodoList listofTodos={todos} />
    </>
  )
}

export default App
