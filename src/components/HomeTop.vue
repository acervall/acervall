<style scoped lang="scss">
  /*   div {
    background-color: aqua;
    div {
      div {
        border: 2px solid black;
        p,
        img,
        h1 {
          border: 2px solid red;
        }
      }
    }
  } */
</style>

<template>
  <div class="container pt-3">
    <div class="p-4">
      <div class="align-items-center d-flex justify-content-between">
        <div class="">
          <p style="margin: 0">Hi, {{ this.$store.state.username }}!</p>
        </div>
        <div class="">
          <img class="avatarimg" :src="selectedAvatar" />
        </div>
      </div>
      <div class="pt-4">
        <h1 class="fw-bold">Let's choose a travel route</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WelcomeComp',
    created() {
      this.try()
    },
    data() {
      return {
        avatar: this.$store.state.avatar,
        selectedAvatar: null
      }
    },
    methods: {
      try() {
        this.selectedAvatar = `../../assets/avatar/${this.avatar}`
      }
    }
  }
</script>
