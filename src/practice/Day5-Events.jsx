import  React from "react";
function Day5Events(){
    function sayHello(){
        alert("Hello Arjun");
    }
    return(
        <div>
            <button onClick={sayHello}>Click Me</button>
        </div>
    );
}
export default Day5Events;