
import React, { useState } from "react";
import './../styles/App.css';
import { flatten } from "cypress/types/lodash";

const App = () => {

  const [fields,setFields] = useState([
    {name:"",age:""}
  ])

  const handleChange = (index,e) => {
    const {name,value} = e.target;
    const updated = [...fields];
    updated[index][name] = value;
    setFields(updated)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div>
        <form onClick={handleSubmit}>
          {
            fields.map((item,index) => {
              <div>
                <input type="text" placeholder="Name" value={item.name} onChange={(e) => handleChange(index,e)}/>
                <input type="number" placeholder="Age" value={item.age} onChange={(e) => handleChange(index,e)}/>
                <button type="button">Remove</button>
              </div>
            })
          }
        </form>
        </div>
          <button onClick={handleAdd}>Add More</button>
          <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default App
