<template>
  <li @click="handleClick">{{ item }}-<slot></slot></li>
</template>

<script lang="ts">
export default {
  props: ["item"],
  methods: {
    handleClick() {
      this.$emit("delete-item", this.item);
    },
  },
};
</script>