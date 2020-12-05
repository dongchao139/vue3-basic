<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>
    <span>{{ count }}</span> - <span>{{ double }}</span>
  </h1>
  <button @click="increase">^=>+1</button>
  <ul>
    <li v-for="number in numbers" :key="number">
      <h1>{{ number }}</h1>
    </li>
  </ul>
  <h4>{{ person.name }}</h4>
  <hello-world></hello-world>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed, reactive, toRefs } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

interface DataProps {
  count: number;
  increase: () => void;
  double: number;
  numbers: number[];
  person: { name?: string };
}

/**
 * 响应式对象原理
 * Vue2.x
 *  Object.defineProperty(data, 'count', {
 *    get() {},
 *    set() {}
 *  });
 *
 * Vue3.0
 *  new Proxy(data, {
 *    get(key) {},
 *    set(key, value) {}
 *  })
 */
export default defineComponent({
  components: { HelloWorld },
  name: "App",
  setup() {
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++; // 这里不用.value
      },
      double: computed(() => {
        return data.count * 2;
      }),
      numbers: [0, 1],
      person: {},
    });
    data.numbers[0] = 5;
    data.person.name = "viking";
    // 将响应式对象转换为ref对象
    const refData = toRefs(data);
    return {
      ...refData,
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
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
</style>
