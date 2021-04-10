<template>
  <div>
    <div v-bind:title="title">hello world</div>
    <input v-model="content" />
    <div>{{content}}</div>
  </div>
</template>

<script lang="js">
export default {
  name: "App1",
  data() {
    return {
      title: "this is hello world",
      content: "this is content"
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>