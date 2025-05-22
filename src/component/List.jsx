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
        <div className='container'>
            <h1 className='text-center'>Todo List</h1>
            <form onSubmit={HandleSubmit}>
                <div className='d-flex gap-4'>
                <input type="text"
                    name="todo"
                    id="todo"
                    placeholder='Enter your todos here'
                    value={Input}
                    onChange={HandleInput}
                    className='form-control'
                />
                <button className='btn btn-success'>Submit</button>
                </div>
            </form>
            <ul className='list-group mt-4'>
                {todos.map((todo, index) => (
                    <div className='d-flex gap-4 mt-2'>
                    <li key={index} className='text-left'>{todo} </li>
                        <button onClick={()=>{HandleDelete(index)}} className='btn btn-danger'>Delete</button>
                   
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default List;