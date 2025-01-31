/* eslint-disable react/prop-types */
import { useState } from "react";

function Todoinput({onSubmit}) {
    const [inputvalue, setinputvalue] = useState("");

    function onformSubmit(e){
        e.preventDefault();
        onSubmit?.(inputvalue);
        setinputvalue('');
    }
    return (
        <>
          <form onSubmit = {onformSubmit}>
            <input 
              type="text" 
              placeholder="Add a task"
              onChange = {(e)=>{setinputvalue(e.target.value)}} 
              style={{ width: "300px", height: "40px", fontSize: "16px" }} 
              value = {inputvalue}
              />
          </form>
            <br/> 
            <button>Add Todo</button>
        </>
    );
}
export default Todoinput;