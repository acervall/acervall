<template>
  <button
    v-for="num in 9"
    :key="num"
    @click="selectAvatar(num)"
    class="avatarbtn m-2"
  >
    <img :src="`../../assets/avatar/avatar${num}.jpg`" class="avatarimg" />
  </button>
  <!-- https://stackoverflow.com/questions/44617484/vue-js-loop-via-v-for-x-times-in-a-range -->
</template>

<script>
  export default {
    name: 'ChangeAvatar',

    data() {
      return {
        n: null
      }
    },

    emits: ['avatarChanged'],

    methods: {
      selectAvatar(n) {
        console.log(localStorage)
        console.log(n)
        this.$store.commit('changeAvatar', n)
        this.$emit('avatarChanged')
      }
    }
  }
</script>
