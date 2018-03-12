import Vue from 'vue'
import Vuex from 'vuex';

import MyTodoModule from './MyTodoList/module';

Vue.use( Vuex );

let store = new Vuex.Store( {
    modules: {
        myTodoList: MyTodoModule
    }
} )

export default store;

if ( module.hot ) {
    // 使 action 和 mutation 成为可热重载模块
    module.hot.accept( [ './MyTodoList/module' ], () => {
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
        const newModule = require( './MyTodoList/module' ).default
        // 加载新模块
        store.hotUpdate( {
            modules: {
                myTodoList: newModule
            }
        } )
    } )
}
