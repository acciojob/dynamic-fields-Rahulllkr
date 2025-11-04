
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [fields,setfields] = useState([
    {name:"",age:""}
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,age)
  }
  const handleRemove = () => {
    
  }
  const handleAdd = () => {

  }
  const handleSubmit = () => {

  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onClick={handleSubmit}>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Age"/>
          <button onClick={handleRemove}>remove</button>
          <button onClick={handleAdd}>Add More</button>
          <button onClick={handleSubmit}>Submit</button>
        </form>

        
    </div>
  )
}

export default App
