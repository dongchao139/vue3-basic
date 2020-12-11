<template>
  <teleport to="body">
    <div id="center" v-if="isOpen"> 
        <h2><slot>this is a modal</slot></h2>
        <button @click="close">关闭</button>
    </div>
  </teleport>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props: {
    isOpen: Boolean
  },
  emits: {
    'close-modal': null
  },
  setup(props, context) {
      function close() {
        // vue2: this.$emit('xxx',yyy)
          context.emit('close-modal', {type: 'close'});
      }
      return {
          close
      }
  },
})
</script>
<style>
 #center {
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     margin: auto;
     border: 1px solid #ccc;
     background: skyblue;
     width: 200px;
     text-align: center;
     height: 125px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
 #center > h2 {
     /* margin: auto 0;
     line-height: 125px; */
 }
 #center button {
     width: 80px;
     background: purple;
     border-width: 0;
     padding-top: 5px;
     padding-bottom: 5px;
     border-radius: 5px;
     color: white;
     font-size: 14px;
     outline: 0;
     cursor: pointer;
 }
 #center button:hover {
     background: rgb(167, 19, 167);
 }
</style>