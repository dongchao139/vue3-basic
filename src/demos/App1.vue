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
import {ref,defineComponent,computed,reactive} from 'vue';
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: {name?: string};
}
export default defineComponent({
  name: "App1",
  setup() {
    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2;
    // })
    // const increase = () => {
    //   count.value++
    // }
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
      // count,
      // double,
      // increase
      data
    }
  },
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   increase() {
  //     this.count++
  //   }
  // }
})
</script>

<style scoped>

</style>