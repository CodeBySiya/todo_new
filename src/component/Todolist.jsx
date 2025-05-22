import React, { useState } from 'react'

function Todolist(){
    const[inputValue, setInputValue] = useState('');
    const [todos,setTodos] =useState([]);

   function handleDelete(index){
          const newList = [...todos];
          console.log(newList);
          newList.splice(index,1);
          setTodos(newList)
   }
    function handleInput(event){
           setInputValue(event.target.value)
        //    console.log(inputValue)
    }
    function HandleSubmit(event){
        event.preventDefault();
        setTodos([...todos, inputValue]);
        setInputValue('');


    }
    return(
        <>
         <h2>Todo List</h2>
         <form onSubmit={HandleSubmit}>
            <input type="text" name='todos' 
            value={inputValue}
            onChange={handleInput}
            id="todos"/>
            <button>add</button>
         </form>
         <ul>
           {todos.map((todo,index)=>(
            <>
            <li key={index}>{todo}
            <button onClick={() =>handleDelete(index)}>Delete</button>
            </li>
            </>
           ))}
         </ul>
        </>
    )
}

export default Todolist;