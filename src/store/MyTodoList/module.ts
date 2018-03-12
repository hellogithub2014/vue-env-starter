import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import Todo from './todo.model';

export default {
    namespaced: true,
    state: {
        todos: <Todo[]>[],
        uid: 0,
    },
    getters,
    mutations,
    actions,
}
