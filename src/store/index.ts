import Vue from 'vue'
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use( Vuex );

let store = new Vuex.Store( {
    state: {
        todos: [
            {
                id: 1,
                done: false,
                msg: 'todo1'
            }, {
                id: 2,
                done: true,
                msg: 'todo2'
            }, {
                id: 3,
                done: false,
                msg: 'todo33'
            }
        ]
    },
    getters: {
        doneTodos ( state ) {
            return state.todos.filter( todo => todo.done )
        },
        doneTodoCount ( state, getters ) {
            return getters.doneTodos.length;
        }
    },
    mutations,
    actions
} )

export default store;

if ( module.hot ) {
    // 使 action 和 mutation 成为可热重载模块
    module.hot.accept( [ './mutations' ], () => {
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
        const newMutations = require( './mutations' ).default
        // 加载新模块
        store.hotUpdate( {
            mutations: newMutations,
        } )
    } )
}
