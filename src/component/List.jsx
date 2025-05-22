import React, { useState } from 'react'

function List() {
    const [Input, SetInput] = useState('');
    const [todos, SetTodos] = useState([]);
    const HandleDelete =(index)=>{
      const ListNew =  [...todos];
      ListNew.splice(index,1);
      SetTodos(ListNew);
    }

    function HandleInput(event) {
        SetInput(event.target.value);
    }

    function HandleSubmit(event) {
        event.preventDefault();
        SetTodos([...todos, Input]);
        SetInput('');

    }
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text"
                    name="todo"
                    id="todo"
                    placeholder='Enter your todos here'
                    value={Input}
                    onChange={HandleInput}
                />
                <button>Submit</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button onClick={()=>{HandleDelete(index)}}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List;