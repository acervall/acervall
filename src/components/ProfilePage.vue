<style></style>

<template>
  <h1>Hi, {{ username }}!</h1>
  <img class="profilePic avatarimg" :src="avatar" />
  <button @click="showDetails()">Change avatar</button>
  <div v-show="showModal">
    <ChangeAvatar />
  </div>
  <!-- https://stackoverflow.com/questions/63489878/show-component-on-click-with-vue-js -->
  <button @click="removeUser" type="submit">Sign out</button>
</template>

<script>
  import { mapState } from 'vuex'
  import ChangeAvatar from './ChangeAvatar.vue'

  export default {
    name: 'ProfilePage',

    emits: ['usernameSubmitted'],

    components: {
      ChangeAvatar
    },

    computed: {
      ...mapState(['username', 'avatar'])
    },

    data() {
      return {
        showModal: false
      }
    },

    methods: {
      removeUser() {
        this.$store.commit('clearUser')
        this.$emit('usernameSubmitted')
        localStorage.clear()
        console.log(localStorage)
        this.$router.push('/')
      },
      showDetails() {
        this.showModal = !this.showModal
      }
    }
  }
</script>
