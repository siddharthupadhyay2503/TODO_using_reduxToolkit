import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

function ViewTODO() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <>
            <ul className="mt-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="bg-white rounded-md w-[75%] mx-auto p-4 flex justify-between items-center shadow-md mt-4">
                        <span className="text-lg">{todo.text}</span>
                        <button
                            onClick={() => handleDelete(todo.id)}
                            className="border border-red-400 text-red-600 hover:bg-red-600 hover:text-white font-bold py-1 px-3 rounded-sm"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>   
    );
}

export default ViewTODO;