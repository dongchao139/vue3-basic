<template>
  <div>HelloWorld</div>
  <div @click="onClick">{{ count }}</div>
  <h3>{{greetings}}</h3>
  <button @click="upateGreeting">greeting</button>
  <h3>x: {{x}} y: {{y}}</h3>
</template>

<script lang="ts">
import { 
  defineComponent, onMounted, onUpdated, 
  reactive, ref,watch, onUnmounted
} from "vue";
import {test} from '../scripts/test';
import useMousePosition from '../hooks/useMousePosition';

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
export default defineComponent({
  setup() {
    test((n: string) => {
      console.log(n);
    });
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
    })
    // 在watch函数中处理副作用的操作
    // watch中监听的必须是响应式对象、ref、getter函数或者此类的数组
    watch([greetings, () => data.num ], (newValue, oldValue) => {
      console.log('old value ', oldValue);
      document.title = 'updated' + greetings.value;
      console.log('new value ', newValue);
    });
    const {x, y} = useMousePosition();
    return {
      count,
      greetings,
      upateGreeting,
      onClick,
      x, y
    };
  },
});
</script>
<style scoped>
div {
  cursor: pointer;
}
</style>