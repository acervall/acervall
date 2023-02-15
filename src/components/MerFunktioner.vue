<template>
  {{ propvalue }}
  <input type="text" v-model="inputvalue" />
  <button @click="inputwords">Send</button>
</template>

<script>
  export default {
    name: 'MerFunktioner',

    data() {
      return { inputvalue: null }
    },
    methods: {
      inputwords() {
        this.$emit('emitvaluex', this.inputvalue)
      }
    },
    emits: ['emitvaluex'],
    props: {
      propvalue: {
        type: String,
        required: true
      }
    }
  }
</script>
