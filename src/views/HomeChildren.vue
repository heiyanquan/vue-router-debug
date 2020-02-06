<template>
  <div class="home">
    <h1>this is home children</h1>
    <h2 @click="goToHome">go to home</h2>
  </div>
</template>

<script>
export default {
  name: 'homeChildren',
  data() {
    return {
      homeChildrenData: 'homeChildrenData'
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  },
}
</script>
