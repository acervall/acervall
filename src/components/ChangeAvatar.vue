<template>
  <button
    v-for="n in 9"
    :key="n"
    @click="selectAvatar(n)"
    class="avatarbtn m-2"
  >
    <img :src="`../../assets/avatar/avatar${n}.jpg`" class="avatarimg" />
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
