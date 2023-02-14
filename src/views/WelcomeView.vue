<style scoped lang="scss">
  #backgroundImg {
    height: 100vh;
    position: relative;
    background-color: #181818;
    display: flex;
    overflow: hidden;
  }
  #backgroundImg:after {
    content: '';
    background: url(../../assets/img/portrait1.jpg);
    background-size: cover;
    height: 100vh;
    position: fixed;
    opacity: 0.2;
  }
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    #NewProfile {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>

<template>
  <div id="backgroundImg">
    <div id="content" class="popupoverlay">
      <img class="avatarimg" :src="avatar" />

      <form>
        <input
          class="bar"
          type="text"
          v-model="newUsername"
          placeholder="Name"
        />
      </form>
      <p>Choose your avatar</p>
      <div id="NewProfile">
        <ChangeAvatar />
        <NewProfile :newUser="newUsername" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NewProfile from '../components/NewProfile.vue'
  import ChangeAvatar from '../components/ChangeAvatar.vue'

  export default {
    name: 'WelcomeView',
    components: {
      NewProfile,
      ChangeAvatar
    },
    data() {
      return {
        newUsername: null
      }
    },

    computed: {
      ...mapState(['username', 'avatar'])
    },

    created() {
      if (localStorage.length != 0) {
        this.$router.push('/home')
      }
    }
  }
</script>
