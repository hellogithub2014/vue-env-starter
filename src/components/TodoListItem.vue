<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
});
</script>
