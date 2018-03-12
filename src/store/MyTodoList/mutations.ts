import Todo from './todo.model';
import MUTATION_TYPE from './mutation-types';

export default {
    [ MUTATION_TYPE.ADD_TODO ] ( state: { todos: Todo[], uid: number }, payload: { title: string } ) {
        state.todos.push( {
            id: state.uid,
            title: payload.title,
            complete: false,
        } );
        state.uid++;
    },
    [ MUTATION_TYPE.REMOVE_TODO ] ( state: { todos: Todo[] }, payload: { uid: number } ) {
        state.todos = state.todos.filter( todo => todo.id !== payload.uid );
    },
    [ MUTATION_TYPE.EDIT_TODO ] ( state: { todos: Todo[] }, payload: { uid: number, title: string } ) {
        state.todos = state.todos.map( todo => {
            return todo.id !== payload.uid ? todo : Object.assign( {}, todo, { title: payload.title } )
        } );
    },
    [ MUTATION_TYPE.COMPLETE_TODO ] ( state: { todos: Todo[] }, payload: { uid: number } ) {
        state.todos = state.todos.map( todo => {
            return todo.id !== payload.uid ? todo : Object.assign( {}, todo, { complete: true } )
        } );
    },
    [ MUTATION_TYPE.COMPLETE_ALL ] ( state: { todos: Todo[] } ) {
        state.todos = state.todos.map( todo => {
            return Object.assign( {}, todo, { complete: true } )
        } );
    },
    [ MUTATION_TYPE.TOGGLE_COMPLETE ] ( state: { todos: Todo[] }, payload: { uid: number } ) {
        state.todos = state.todos.map( todo => {
            return todo.id !== payload.uid ? todo : Object.assign( {}, todo, { complete: !todo.complete } )
        } );
    },
    [ MUTATION_TYPE.TOGGLE_ALL ] ( state: { todos: Todo[] } ) {
        state.todos = state.todos.map( todo => {
            return Object.assign( {}, todo, { complete: !todo.complete } )
        } );
    },
    [ MUTATION_TYPE.REMOVE_ALL_COMPLETED ] ( state: { todos: Todo[] } ) {
        state.todos = state.todos.filter( todo => !todo.complete );
    },

};
