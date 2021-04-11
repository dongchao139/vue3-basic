<template>
  <div>
    <input v-model="firstName"/>
    <input v-model="lastName"/>
    <div>{{fullName}}</div>
  </div>
</template>

<script lang="js">
/**
 * computed
 */
export default {
  name: "App1",
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName() {
      return this.firstName + this.lastName
    }
  }
}
</script>

<style scoped>

</style>