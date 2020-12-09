<template>
  <div>HelloWorld</div>
  <div @click="onClick">{{ count }}</div>
  <h3>{{greetings}}</h3>
  <button @click="upateGreeting">greeting</button>
  <h3>x: {{x}} y: {{y}}</h3>
  <Suspense>
    <!--
    <Suspense> slots expect a single root node.
    -->
    <template #default>
      <!-- <async-show /> -->
      <dog-show />
    </template>
    <template #fallback>
      <h1>content is loading</h1>
    </template>
  </Suspense>
  <p>{{err}}</p>
  <!-- <h3 v-if="loading">Loading...</h3>
  <img v-if="loaded" :src="result.message">
  <modal :isOpen="open" @close-modal="onModalClose">My Modal!!!</modal> -->
</template>

<script lang="ts">
import { 
  defineComponent, onMounted, onUpdated, 
  reactive, ref,watch, onUnmounted, onErrorCaptured
} from "vue";
import useMousePosition from '../hooks/useMousePosition';
import useURLLoader from '../hooks/useURLLoader';
import Modal from "./Modal.vue";
import AsyncShow from './AsyncShow.vue';
import DogShow from './DogShow.vue';
/**
 * Vue3 生命周期
 * beforeCreate  -> use setup()
 * created       -> use setup()
 * beforeMount   -> onBeforeMount
 * mounted       -> onMounted
 * beforeUpdate  -> onBeforeUpdate
 * updated       -> onUpdated
 * beforeDestroy -> onBeforeUnmount
 * destroyed     -> onUnmounted
 * activated     -> onActivated
 * dactivated    -> onDeactivated
 * errorCaptured -> onErrorCaptured
 *
 * onRenderTracked
 * onRenderTriggered
 */
interface DogResult {
  message: string;
  status: string;
}
export default defineComponent({
  components:{ 
    // Modal,
    DogShow,
    // AsyncShow
  },
  setup() {
    onUpdated(() => {
      console.log("updated");
    });
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };
    const greetings = ref('');
    const upateGreeting = () => {
      greetings.value += 'Hello ';
    };
    const data = reactive({
      num: 1
    });
    // 在watch函数中处理副作用的操作
    // watch中监听的必须是响应式对象、ref、getter函数或者此类的数组
    watch([greetings, () => data.num ], (newValue, oldValue) => {
      console.log('old value ', oldValue);
      document.title = 'updated' + greetings.value;
      console.log('new value ', newValue);
    });
    const {x, y} = useMousePosition();

    const {loading, loaded, result, error} = 
      useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random');
    watch(result, () => {
      if (result && result.value) {
        console.log(result.value.message);
      }
    });
    const open = ref(false);
    const onModalClose = () => {
      open.value = false;
    }

    const err = ref(null);
    onErrorCaptured((e: any) => {
      err.value = e;
      return true;
    })

    return {
      count,
      greetings,
      upateGreeting,
      onClick,
      x, y,
      loading, loaded, result, error,
      open, onModalClose,
      err
    };
  },
});
</script>
<style scoped>
div {
  cursor: pointer;
}
</style>