<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <h1>{{data.count}}</h1>
    <h1>{{data.double}}</h1>
    <ul>
      <li v-for="number in data.numbers" :key="number"></li>
    </ul>
    <p>{{data.person.name}}</p>
    <button @click="data.increase">+1</button>
  </div>
</template>

<script lang="ts">
import {defineComponent,computed,reactive} from 'vue';
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: {name?: string};
}

/**
 * 使用reactive
 */
export default defineComponent({
  name: "App1",
  setup() {
    const data: DataProps = reactive({
      count: 0,
      increase: () => data.count++,
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    data.numbers.push(4);
    data.person.name = 'abc';
    return {
      data
    }
  }
})
</script>

<style scoped>

</style>