<template>
  <div>HelloWorld</div>
  <div @click="onClick">{{count}}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
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
        onMounted(()=>{
            console.log('mounted')
        });
        onUpdated(()=>{
            console.log('updated')
        });
        const count = ref(0);
        const onClick = () => {
            count.value++;
        }
        return {
            count, onClick
        }
    }
})
</script>
<style scoped>
div{
    cursor: pointer;
}
</style>