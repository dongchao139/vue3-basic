<template>
  <li @click="handleClick">{{ item }}-<slot></slot></li>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  props: ["item"],
  methods: {
    handleClick() {
      this.$emit("delete-item", this.item);
    },
  },
});
</script>

<style scoped>
li {
  list-style-type: none;
  color: green;
}
</style>