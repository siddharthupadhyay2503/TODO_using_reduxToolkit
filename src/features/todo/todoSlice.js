import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "First Todo" }]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if(action.payload !='')
            {
                state.todos.push({ id: nanoid(), text: action.payload });
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;