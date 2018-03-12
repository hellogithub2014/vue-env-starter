<template>
  <div id="app">
    <img src="./assets/logo.png">
    <TodoList/>
    <button @click="showMyFisrtComp">showMyFisrtComp</button>
    <button @click="showHelloWorld">showHelloWorld</button>
    <router-link to='/my-todo-list'>my-todo-list</router-link>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import TodoList from './components/TodoListDemo/TodoList.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  methods: {
    showMyFisrtComp() {
      console.log(1);
      //   this.$router.push({ name: 'first', params: { firstName: 'liu', lastName: 'bin' } }); // 1
      //   this.$router.push({ path: `/first-comp/liu/bin` }); // 2
      this.$router.push(`/first-comp/liu/bin`); //3
    },
    showHelloWorld() {
      this.$router.push('/');
    }
  },
  components: {
    TodoList
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
