import MUTATION_TYPE from './mutation-types';

export default {
    deleteTodo ( { commit }, id ) {
        console.log( `try deleteTodo`, id );
        if ( Math.random() > 0.5 ) {
            commit( MUTATION_TYPE.REMOVE_TODO, { uid: id } );
            console.log( `success deleteTodo`, id );
        } else {
            console.log( `fail deleteTodo`, id );
        }
    }
};
