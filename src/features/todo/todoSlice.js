import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "First Todo" }]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(state);
            console.log(action);
            state.todos.push({ id: nanoid(), text: action.payload });
        },
        deleteTodo: (state, action) => {
            console.log(state);
            console.log(action);
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;