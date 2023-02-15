<style scoped lang="scss">
  .container {
    text-align: center;
  }
  #profilePic {
    width: 20vh;
    height: 20vh;
    border: 3px solid #89b5ab;
  }

  .largebtn {
    height: 5vh;
    color: #fff;
    border: transparent;
  }
</style>

<template>
  <div class="container mt-5 pt-4">
    <img id="profilePic" class="avatarimg mx-auto d-block mt-4" :src="avatar" />
    <h1 class="mt-4">Hi, {{ username }}!</h1>

    <button class="largebtn mt-4" @click="showDetails()">Change avatar</button>

    <div v-show="showModal">
      <ChangeAvatar />
    </div>
    <!-- https://stackoverflow.com/questions/63489878/show-component-on-click-with-vue-js -->
    <button class="largebtn mt-4" @click="removeUser" type="submit">
      Sign out
    </button>
  </div>
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
