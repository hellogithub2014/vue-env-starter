import MUTATION_TYPE from './mutation-types';

export default {
    addTodoAsync ( { commit } ) {
        setTimeout( () => {
            commit( MUTATION_TYPE.ADD_TODO, { msg: 'async task~' } )
        }, 2000 );
    }
}
