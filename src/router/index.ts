import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import MyFirstComp from '@/components/MyFirstComp.vue'

Vue.use( Router )

export default new Router( {
    routes: [ {
        path: '/first-comp/:firstName/:lastName',
        name: 'first',
        component: MyFirstComp,
        props: true,
    }, {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }

    ]
} )
