<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number"></li>
    </ul>
    <p>{{ data.person.name }}</p>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent, computed} from 'vue';

// 使用ref
export default defineComponent({
  name: "App1",
  setup() {
    const count = ref(0);
    const numbers = ref([1, 2, 3]);
    const person = ref<{ name?: string }>({});

    const double = computed(() => {
      return count.value * 2;
    })

    const increase = () => {
      count.value++
    }
    numbers.value.push(4);
    person.value.name = 'abc';
    return {
      count,
      double,
      increase,
      numbers
    }
  }
})
</script>

<style scoped>

</style>