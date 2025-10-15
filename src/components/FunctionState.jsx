import { useState } from "react"

const FunctionState = ( ) => {
  const [count, setCount] = useState(0);
  console.log(count)





  return (
    <div>
        <p>FunctionState: {count} </p>
        <button className="btn btn-primary" onClick={() => setCount(prevCount =>  prevCount + 1)} >State dans Function </button>
    </div>
  )
}

export default FunctionState
