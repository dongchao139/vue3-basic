<template>
  <div>
    <div v-html="content" v-on:click="revert"></div>
  </div>
</template>

<script lang="js">
/**
 * data
 * methods
 *
 * v-text
 * v-html
 * v-on
 */
export default {
  name: "App1",
  data() {
    return {
      msg: "hello world",
      content: "<h1>hello</h1>"
    }
  },
  methods: {
    revert() {
      this.content = (this.content === "<h1>hello</h1>" ? "<h1>world</h1>" : "<h1>hello</h1>")
    }
  }
}
</script>

<style scoped>

</style>