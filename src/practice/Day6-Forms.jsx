import React from "react";
import {useState} from "react";

function Day6forms() {
    const [name,setName] = 
    useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(name);
    }
    return (
    <div>
        <form
         onSubmit={handleSubmit}
         >
         <input 
            type="text"
            placeholder = "Enter Name"
            onChange={(e) => 
             setName(e.target.value)
       } 
        />
        <button>Submit</button>
        </form>
    </div>
    );
}

export default Day6forms;