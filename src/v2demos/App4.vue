<template>
  <div>
    <h1 v-show="show">hello world</h1>
    <button v-on:click="handleClick">toggle</button>
    <ul>
      <li v-for="item of list" :key="item">{{item}}</li>
    </ul>
    <button v-on:click="addItem">addItem</button>
  </div>
</template>

<script lang="js">
export default {
  name: "App1",
  data() {
    return {
      show: true,
      list: [1,2,3]
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    },
    addItem() {
      const newValue = this.list.length + 1;
      this.list[newValue - 1] = newValue;
    }
  }
}
</script>

<style scoped>

</style>