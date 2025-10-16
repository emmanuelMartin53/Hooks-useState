import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from 'uuid'; // package servant à générer des id

const Todo = () => {

  const [todos, setTodos] = useState([
    {id: 1,todo: "Acheter du lait"},
    {id: 2,todo: "Acheter du chocolat"},
    {id: 3,todo: "Acheter du pain"},
  ])
  // console.log(todos)


  const [warning, setWarning] = useState(false)

  const myTodos = todos.map((todo) => {
    return (
      <li className="list-group-item" key={todo.id}>{todo.todo}</li>
    )
  })

  const addNewTodo = (newTodo) => {

    if (newTodo !== "") {
      
     warning && setWarning(false)

      setTodos([
        ...todos, {
          id: uuidv4(),
          todo: newTodo
        }
      ])
    } else {
      setWarning(true)
    }

  }

 const warningMessage = warning && <div className="alert alert-danger mt-5" role="alert">Veuillez indiquer un Todo</div>

  return (
    <div>
      {warningMessage}
      <h1 className="text-center">{todos.length} To-do</h1>
      <ul className="list-group mb-5">
        {myTodos}
      </ul>

      <AddTodoForm newTodo={addNewTodo}/>
    </div>
  )
}
export default Todo;
