<template>
  <div class="p-3 fixed-bottom mb-4">
    <nav class="navbar bar largebtn">
      <button type="button" class="selected">
        <RouterLink @click="submitUsername()" to="/home" class="textbtn"
          >Continue</RouterLink
        >
      </button>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NewProfile',

    data() {
      return {
        newUsername: this.newUser
      }
    },

    computed: {
      username: {
        get() {
          return this.$store.state.username
        },
        set(value) {
          this.$store.commit('updateUsername', value)
        }
      }
    },

    emits: ['usernameSubmitted'],

    props: {
      newUser: String
    },

    methods: {
      submitUsername() {
        this.$store.commit('createUser', this.newUser)
        this.$emit('usernameSubmitted')
      }
    },

    watch: {
      try() {
        console.log(this.username)
      }
    }
  }
</script>
