<style scoped lang="scss">
  #backgroundImg {
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #181818;
    display: flex;
    overflow: hidden;
  }
  #backgroundImg:after {
    content: '';
    background: url(../../assets/img/portrait6.jpg);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: fixed;
  }
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    position: absolute;
    bottom: 0;
    #NewProfile {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  #content:after {
    content: '';
    background: url(../../assets/img/portrait6.jpg);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    opacity: 0.1;
    z-index: 0;
  }

  #selectedavatar {
    width: 11vh;
    height: 11vh;
  }
</style>

<template>
  <div id="backgroundImg">
    <div id="content" class="popupoverlay p-3">
      <img class="avatarimg m-4" :src="avatar" id="selectedavatar" />

      <form class="navbar bar">
        <input
          type="text"
          class="selected"
          v-model="newUsername"
          placeholder="Name"
        />
      </form>
      <div id="NewProfile" class="m-3">
        <ChangeAvatar />
        <div class="mt-5 p-2">
          <NewProfile :newUser="newUsername" />
        </div>
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
