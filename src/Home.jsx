import React, { useState } from "react";
import Create from "./Create";
import "./App.css"
function Home() {
// using state hook ([storing in an array which can be empty ])
const [todos, settodos] = useState([])
    return(
    <div><h2>
        To Do List 
        </h2>
        <Create/>
        {   // ternary operator 
            todos.length===0 
            ?
            <div ><h2>No Record</h2></div>
            :
            todos.map(todo=>(
                <div>
                    {
                        todo
                    }
                </div>
            ))
        }
</div>

)
}

export default Home;