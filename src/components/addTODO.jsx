import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice.js';
import { useState } from 'react';

function AddTODO() {
  const [todo,setTodo] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  }

  return (
    <div className='bg-white rounded-md w-[75%] mx-auto flex justify-center items-center p-7 border border-gray-300 mt-7'>
    <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
    <p className='text-lg mr-3'>ENTER TODO : </p>
    <input 
    value={todo} 
    className=" bg-gray—600 rounded border border—gray—700 text-base
                outline—none py—l px—3 leading—8
                transition-colors duration-200 ease-in—out mr-5 p-1 w-[600px]"
    placeholder='Please enter your todo here....'
    onChange={(e) => setTodo(e.target.value)}

    />
    <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-sm'> Add Todo </button>
    </form>
    </div>
  )
}

export default AddTODO