import { useState } from "react";


const AddTodoForm = ({newTodo}) => {

  const [addTodo, setAddTodo] = useState('')

  // console.log(addTodo)

  const handleTodo = (event) => {
    event.preventDefault()
    newTodo(addTodo);

    setAddTodo("");
  }


  return (
    <div>
        <form onSubmit={handleTodo}>
          <div className="card card-body">
            <div className="form-group">
              <label>Ajouter Todo</label>
              <input className="form-control" value={addTodo} type="text" onChange={(event) => setAddTodo(event.target.value)}/>
              <input className="btn btn-success mt-4" type="submit" />
            </div>
          </div>
        </form>
    </div>
  )
}

export default AddTodoForm;
