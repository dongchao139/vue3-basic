<template>
  <div>
    <h1 v-show="show">hello world</h1>
    <button v-on:click="handleClick">toggle</button>
    <ul>
      <TodoItem 
        v-for="(item,key) of list" :key="item" v-bind:item="item"
        v-on:delete-item="handleDelete(key)"
      >
        {{item}}
      </TodoItem>
    </ul>
    <button v-on:click="addItem">addItem</button>
  </div>
</template>

<script lang="ts">
import TodoItem from './TodoItem.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: "App1",
  components: {
    TodoItem
  },
  data() {
    return {
      show: true,
      list: [1,2,3]
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    },
    addItem() {
      const newValue = this.list.length + 1;
      this.list[newValue - 1] = newValue;
    },
    handleDelete(key: number) {
      this.list.splice(key, 1);
    }
  }
})
</script>

<style scoped>
ul {
  padding-left: 0;
}
</style>