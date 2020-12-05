<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ count }}</h1>
  <h3>{{ double }}</h3>
  <button @click="increase">^=>+1</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed, reactive,toRefs } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    // ref一般使用原始类型
    const count = ref(0);
    const increase = () => {
      count.value++;
    }
    const double = computed(()=>{
      return count.value * 2;
    });
    return {
      // 需要导出后才能在模板中使用
      count, increase, double
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
