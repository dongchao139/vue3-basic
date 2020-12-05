<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ count }}</h1>
  <h4>{{ double }}</h4>
  <button @click="increase">^=>+1</button>
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
    });
    // 将响应式对象转换为ref对象
    const refData = toRefs(data);
    return {
      ...refData
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
