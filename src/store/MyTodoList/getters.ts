import Todo from './todo.model';

export default {
    doneTodos ( state: { todos: Todo[] }, getters ) {
        return state.todos.filter( todo => todo.complete );
    },
    activeTodos ( state: { todos: Todo[] } ) {
        return state.todos.filter( todo => !todo.complete );
    },
    doneTodoCount ( state: { todos: Todo[] }, getters ) {
        return getters.doneTodos.length;
    },
    activeTodoCount ( state: { todos: Todo[] }, getters ) {
        return getters.activeTodos.length;
    }
};
