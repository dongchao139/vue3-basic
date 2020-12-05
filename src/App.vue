<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ data.count }}</h1>
  <h4>{{ data.double }}</h4>
  <button @click="data.increase">^=>+1</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed, reactive,toRefs } from "vue";

interface DataProps {
  count: number;
  increase: () => void;
  double: number;
}

export default defineComponent({
  name: "App",
  setup() {

    const data: DataProps = reactive({
      count: 0, 
      increase: () =>  {
        data.count++; // 这里不用.value
      },
      double: computed(()=>{
        return data.count * 2;
      })
    })
    return {
      // 不能在这里把响应式的对象直接展开
      data
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
