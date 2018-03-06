<template>
  <div class="wrapper">
      <MyFirstTsComponent :text="'myclick'"/>
      <h4>Header</h4>
      <p>this is my first comp</p>
      <p>firstName:{{firstName}}</p>
      <p>lastName:{{lastName}}</p>
      <p>fullName:{{fullName}}</p>
      <p>age:{{age}}</p>
      <strong>MyFirstTsComponent:</strong>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

import MyFirstTsComponent from './MyFirstTsComp/MyFirstTsComp';

export default Vue.extend({
  data() {
    return {
      age: 25
    };
  },
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  components: {
    MyFirstTsComponent
  }
});
</script>

<style lang="scss" scoped>
$color: green;
.wrapper {
  color: $color;
  font-size: 20px;
}
</style>


