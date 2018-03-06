import MUTATION_TYPE from './mutation-types';

let id = 4;

export default {
    [ MUTATION_TYPE.ADD_TODO ] ( state, payload: { msg: string } ) {
        state.todos.push( { id: ++id, done: false, msg: payload.msg } );
    }
}
