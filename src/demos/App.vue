<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">{{number}}</li>
    </ul>
    <p>{{person.name}}</p>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

/**
 * 使用vue2的api
 */
export default defineComponent({
  name: "App1",
   data() {
     return {
       count: 0,
       numbers: [1, 2, 3],
       person: {}
     }
   },
  computed: {
    double(): number {
      return this.count * 2;
    }
  },
   methods: {
     increase() {
       this.count++
     }
   }
})
</script>

<style scoped>

</style>