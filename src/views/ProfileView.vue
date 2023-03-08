<template>
  <div class="phoneContent">
    <template v-if="existingUser">
      <ProfilePage @username-submitted="existingUser = false" />
    </template>
    <template v-else>
      <NewProfile @username-submitted="existingUser = true" />
    </template>
    <NavBar />
  </div>
</template>

<script>
  import NewProfile from '../components/NewProfile.vue'
  import ProfilePage from '../components/ProfilePage.vue'
  import NavBar from '../components/NavBar.vue'

  export default {
    components: {
      NewProfile,
      ProfilePage,
      NavBar
    },
    data() {
      return {
        existingUser: false
      }
    },

    emits: ['usernameSubmitted'],

    created() {
      this.isUser()
    },
    methods: {
      isUser() {
        this.existingUser = localStorage.getItem('username') != null
        console.log(localStorage)
        console.log(this.existingUser)
      }
    }
  }
</script>
