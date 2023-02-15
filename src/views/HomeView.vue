<style scoped lang="scss">
  /*   #searchInput {
    margin: auto;
    display: grid;
    justify-content: center;
    :focus-visible {
      border: none;
    }
  } */
</style>

<template>
  <div>
    <HomeTop />
    <FindStop @select="handleSelect" />
    <StopSelector ref="stopSelector" @select="handleSelect" />
    <NavBar />
  </div>
</template>

<script>
  import FindStop from '../components/FindStop.vue'
  import StopSelector from '../components/StopSelector.vue'
  import NavBar from '../components/NavBar.vue'
  import HomeTop from '../components/HomeTop.vue'

  export default {
    data() {
      return {
        departuresResult: null
      }
    },
    components: {
      FindStop,
      StopSelector,
      NavBar,
      HomeTop
    },
    methods: {
      handleSelect(id) {
        console.log(this.handleSelect, 'handle select emit')
        this.$refs.stopSelector.selectStop(id)
      }
    }
  }
</script>
