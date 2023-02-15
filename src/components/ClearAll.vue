<template></template>

<script>
  export default {
    name: 'ClearAll',
    created() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
</script>
