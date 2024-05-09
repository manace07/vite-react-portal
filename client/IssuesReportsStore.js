import {create} from 'zustand';

export const IssuesReportsStore = create ((set) =>({
    todos: [],
    addTodo: (todo) => set (state => ({todos:[...state.todos, todo] })),

}));