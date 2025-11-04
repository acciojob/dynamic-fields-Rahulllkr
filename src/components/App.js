
import React, { useState } from "react";
import './../styles/App.css';

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

  const handleRemove = (index) => {
    const updated = fields.filter((item,i) => {
      return i !== index;
    })
    setFields(updated)
  }

  const handleAdd = () => {
    setFields([...fields,{name:"",age:""}]);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleSubmit}>
          {
            fields.map((item,index) => {
               return <div key={index} style={{margin:"20px"}}>
                <input name="name" type="text" placeholder="Name" value={item.name} onChange={(e) => handleChange(index,e)}/>
                <input name="age" type="number" placeholder="Age" value={item.age} onChange={(e) => handleChange(index,e)}/>
                <button type="button" onClick={() => handleRemove(index)}>Remove</button>
              </div>
            })
          }
          <button type="button" onClick={handleAdd}>Add More..</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        
    </div>
  )
}

export default App
