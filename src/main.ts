// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import registerFilters from './filters/index';
import Vue from 'vue'
import App from './App.vue';
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

registerFilters();

/* eslint-disable no-new */
new Vue( {
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
} )
